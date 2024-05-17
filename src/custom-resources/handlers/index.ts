import { CustomResourceHandler } from './lambda_custom_resource_handler';

export const handler = async (event: any, context: any) => {
  return new CustomResourceHandler().handle(event, context);
};
