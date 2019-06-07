import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const login:APIGatewayProxyHandler = async () =>{
   
    return({
        statusCode:200,
        body:JSON.stringify({
            message:'Bad request'
        })
    })
}

export const loginPost:APIGatewayProxyHandler = async () => {
    return({
        statusCode:201,
        body:JSON.stringify({
            message:`This is coming from POST`
        })
    })
}