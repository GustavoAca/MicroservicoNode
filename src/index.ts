
import express from 'express';
import statusRoute from './routes/status.route';
import userRoute from './routes/users.route';

const app = express();

//configurações da aplicação
app.use(express.json()); //para acessar json
app.use(express.urlencoded({extended: true}));

// configuração de rotas
app.use(userRoute);
app.use(statusRoute);

//Inicialização do servidor
app.listen(3000, () => {
        console.log('Aplicação executada na porta 3000!');
});