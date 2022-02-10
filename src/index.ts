
import express from 'express';
import errorHandler from './middlewares/error.handler.middlewares';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import userRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json()); //para acessar json
app.use(express.urlencoded({ extended: true }));

// configuração de rotas
app.use(userRoute);
app.use(statusRoute);
app.use(authorizationRoute);

//configuração dos hendlers de erro
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
        console.log('Aplicação executada na porta 3000!');
});