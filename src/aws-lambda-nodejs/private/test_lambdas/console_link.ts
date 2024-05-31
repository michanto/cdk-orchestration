const logger = process.env.LogLevel ? console : undefined;

function log(message: Record<string, any>) {
  logger?.log(JSON.stringify(message));
}

export async function s3UriToConsoleUri(event: any, context: any) {
  log({ name: 's3UriToConsoleUri' });
  log({ event: event, context: context });
  if (!event.s3Uri) {
    throw new Error('Did not find an s3Uri in the event.');
  }
  let s3Uri = new URL(event.s3Uri);
  let bucket = s3Uri.hostname;
  // Remove the first '/' and add the suffix.
  let prefix = s3Uri.pathname.substring(1) + (event.Suffix ?? '');
  let region = event.Region ?? 'us-west-2';
  log({ bucket: bucket, prefix: prefix, region: region });

  let destination = `https://${
    region
  }.console.aws.amazon.com/s3/object/${
    bucket
  }?region=${
    region
  }&bucketType=general&prefix=${
    encodeURIComponent(prefix)
  }`;
  log({ destination: destination });

  return Promise.resolve({ destination: destination });
}
