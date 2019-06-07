import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

export const test: APIGatewayProxyHandler=async (event,_context)=>{
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This is a test function',
      input: event,
    }, null, 2),
  };
}
