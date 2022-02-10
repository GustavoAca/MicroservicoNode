import { Router, Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepositery from "../repositories/user.repositery";
import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";

const authorizationRoute = Router();

authorizationRoute.post('/token', async (req: Request, res: Response, next: NextFunction) => {

        try {
                
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
                
                const jwtPayLoad = {username: user.username};
                const jwtOptions = {subject: user.uuid};
                const secretKey = 'my_secret_key';

                const jwt = JWT.sign(jwtPayLoad,secretKey,jwtOptions);

                res.status(StatusCodes.OK).json({ token: jwt});

                
                /*
                JWT
                ----------------------------------------
                'iss ' o dominio da aplicação geradora do token
                'sub' é o assunto do token, mas é muito utilizado para guardar o ID do usuario
                'aud' define quem pode uar o token
                'exp' data para expiração do token
                'nbf' define uma data para qual o token não pode ser aceito antes dela
                'iat' data da criação do token
                'jti' o ID do token

                */

        } catch (error) {
                next(error);
        }

});


export default authorizationRoute;