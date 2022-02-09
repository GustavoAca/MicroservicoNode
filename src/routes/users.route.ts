import { NextFunction, Request, Response ,Router  } from 'express';
import {StatusCodes} from 'http-status-codes'

//get /users
//get /user/:uuid
//post /users
//put /user/:uuid
//delete /user/:uuid

const userRoute = Router()
userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
        const users=[{ userName: 'Renan'}];
        res.status(StatusCodes.OK).send(users);
});

userRoute.get('/users/:uuid', (req:Request <{ uuid: string}>, res: Response, NEXT: NextFunction) => {
        const uuid = req.params.uuid;
        
        res.status(StatusCodes.OK).send({ uuid });
});

userRoute.post('/users',(req: Request, res: Response, next: NextFunction) => {
        const newUser = req.body;
        console.log(req.body);
        res.status(StatusCodes.CREATED).send(newUser);
});

userRoute.put('/users/:uuid',(req: Request <{ uuid: string}> , res: Response,  next: NextFunction) => {
        const uuid = req.params.uuid;  
        const modifiedUser = req.body;
        modifiedUser.uuid = uuid;
        res.status(StatusCodes.OK).send({modifiedUser});
        //dessa maneira devolvemos o usuario e o id
} );

userRoute.delete('/users/:uuid', (req: Request<{ uuid: string}>,res: Response, next: NextFunction ) =>{

        res.sendStatus(StatusCodes.OK);
} );

export default userRoute;