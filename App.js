const express  = require('express');
const app = express();
const bodyParser = require('body-parser');

//Debug Teste log 
const morgan = require('morgan');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({

        });
    };

    next();
})

//Produtos
app.use('/produtos', rotaProdutos);

//Pedidos
app.use('/pedidos', rotaPedidos);

//Tratamento de Erro
app.use((req, res, next) => {
    const erro = new Error('ROTA NÃO ENCONTRADA!');
    erro.status = 404;
    next(erro);

});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

/*app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensage: 'Deu Certo!' 
    });
});*/

module.exports = app;