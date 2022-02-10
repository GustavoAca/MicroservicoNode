import { NextFunction, Response, Request } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken';
import userRepositery from "../repositories/user.repositery";

async function bearerAthenticationMiddleware(res:Response, req: Request, next:NextFunction){
        try{

             const athorizationHeader  = req.headers['authorization']

             if(!athorizationHeader){
                     throw new ForbiddenError('Credencias não informadas');
             }

             const [athenticationType, token] = athorizationHeader.split(' ');

             if(athenticationType !== 'Bearer' || !token){
                     throw new ForbiddenError("Tipo de autenticação invalido");
             }

             const tokenPayload = JWT.verify(token, 'my_secret_key');

             
             if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
                throw new ForbiddenError("token invalido");
             }    
                      
                const user = {
                        uuid: tokenPayload.sub,
                        username: tokenPayload.username
                };
                
                req.user = user;
                next();
        }catch(error){
                next(error)
        }
}

export default bearerAthenticationMiddleware;