import { Request, Response, NextFunction } from "express";
import userRepositery from "../repositories/user.repositery";
import ForbiddenError from "../models/errors/forbidden.error.model";
async function  basicAuthenticationMiddleware(req: Request, res: Response, next:NextFunction){
    try{
        const authorizationHeader = req.headers['authorization'];

                if (!authorizationHeader) {
                        throw new ForbiddenError('Credenciais não informadas');
                }
                // Basic  QWRtaW46QWRtaW4=
                const [althenticationType, token] = authorizationHeader.split(' ');

                if (althenticationType !== 'Basic' || !token) {
                        throw new ForbiddenError('Tipo de autenticação inválido');
                }
                const tokenContent = Buffer.from(token, 'base64').toString('utf-8')
                const [username, password] = tokenContent.split(':');


                if (!username || !password) {
                        throw new ForbiddenError('Credenciais não preenchidas');
                }

                const user = await userRepositery.findByUsernameAndPassword(username, password);
                console.log(user);
               
                if (!user) {
                        throw new ForbiddenError('Usuario ou senha invalidos!');
                };
                req.user = user;
                next();

    } catch(error){
        next(error)
    }
}

export default  basicAuthenticationMiddleware;