declare global {
  interface ReadableStream {}
  interface Blob {}
}
import { S3 } from '@aws-sdk/client-s3';
const logger = process.env.LogLevel ? console : undefined;

function log(message: Record<string, any>) {
  if (process.env.LogLevel) {
    console.log(JSON.stringify(message));
  }
}

export const handler = async (event: any, context: any) => {
  log({ Event: event });
  log({ Context: context });

  if (event.RequestType == 'Delete') {
    return Promise.resolve({
      IsComplete: true,
    });
  }

  // If the properties were encoded, decode them now.
  if ('EncodedProperties' in event.ResourceProperties) {
    event.ResourceProperties = JSON.parse(Buffer
      .from(event.ResourceProperties.EncodedProperties, 'base64')
      .toString('utf8'));
    log({ DecodedEvent: JSON.stringify(event) });
  }
  let bucket = event.ResourceProperties.Bucket;
  let key = event.ResourceProperties.Key;
  let physicalResourceId = event.PhysicalResourceId ??
    event.ResourceProperties.PhysicalResourceId?.id ??
    event.LogicalResourceId;

  let s3Client = new S3({
    logger: logger,
  });
  log({ message: 's3.getObject' });
  try {
    let result = await s3Client.getObject({
      Bucket: bucket,
      Key: key,
    });
    let value: any;
    if (result.Body) {
      let body = await (result.Body as any).transformToString('utf-8');
      value = JSON.parse(body);
    }

    let data: any = {
      ...(event.ResourceProperties.Defaults ?? {}),
      ...value,
    };

    if (event.ResourceProperties.PhysicalResourceId?.responsePath) {
      physicalResourceId = data[event.ResourceProperties.PhysicalResourceId!.responsePath] ?? physicalResourceId;
    }

    return await Promise.resolve({
      PhysicalResourceId: physicalResourceId,
      IsComplete: true,
      Data: data,
    });
  } catch (e) {
    return Promise.resolve({
      PhysicalResourceId: physicalResourceId,
      IsComplete: true,
      Data: {
        ...(event.ResourceProperties.Defaults ?? {}),
      },
    });
  }
};
