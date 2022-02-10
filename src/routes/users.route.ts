import { NextFunction, Request, Response ,Router  } from 'express';
import userRepositery from '../repositories/user.repositery';



//get /users
//get /user/:uuid
//post /users
//put /user/:uuid
//delete /user/:uuid

const userRoute = Router()
userRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
        const users = await userRepositery.findAllUser();
        res.status(200).send(users);
});

userRoute.get('/users/:uuid',async  (req:Request <{ uuid: string}>, res: Response, NEXT: NextFunction) => {
        const uuid = req.params.uuid;
        const user =  await userRepositery.findById(uuid);
        res.status(200).send(user);
});

userRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
        const newUser = req.body;
        const uuid = await userRepositery.create(newUser);
        res.status(401).send(uuid);
});

userRoute.put('/users/:uuid',(req: Request <{ uuid: string}> , res: Response,  next: NextFunction) => {
        const uuid = req.params.uuid;  
        const modifiedUser = req.body;
        modifiedUser.uuid = uuid;
        res.status(200).send({modifiedUser});
        //dessa maneira devolvemos o usuario e o id
} );

userRoute.delete('/users/:uuid', (req: Request<{ uuid: string}>,res: Response, next: NextFunction ) =>{

        res.sendStatus(200);
} );

export default userRoute;