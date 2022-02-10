import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { nextTick } from 'process';
import DatabaseError from '../models/errors/database.error.model';
import userRepositery from '../repositories/user.repositery';



//get /users
//get /user/:uuid
//post /users
//put /user/:uuid
//delete /user/:uuid

const userRoute = Router()
userRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
        const users = await userRepositery.findAllUser();
        res.status(StatusCodes.OK).send(users);
});

userRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        try {
                const uuid = req.params.uuid;
                const user = await userRepositery.findById(uuid);
                res.status(StatusCodes.OK).send(user);

        } catch (error) {
                        next(error);
                }
});

userRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
        const newUser = req.body;
        const uuid = await userRepositery.create(newUser);
        res.status(StatusCodes.CREATED).send(uuid);
});

userRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid;
        const modifiedUser = req.body;

        modifiedUser.uuid = uuid;

        await userRepositery.update(modifiedUser);

        res.status(StatusCodes.OK).send();
        //dessa maneira devolvemos o usuario e o id
});

userRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid;
        await userRepositery.remove(uuid);
        res.sendStatus(StatusCodes.OK);
});

export default userRoute;