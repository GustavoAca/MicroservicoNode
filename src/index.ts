
import express,{ Request, Response, NextFunction } from 'express';

const app = express();


app.get('/status', (req: Request, res: Response, next: NextFunction ) => {
        res.status(200).send({ foo: 'Sucesso, bora pra cima'});
} );


app.listen(3000, () => {
        console.log('Aplcicação executnato na porta 3000!');
});