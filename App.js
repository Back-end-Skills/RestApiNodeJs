const express  = require('express');
const app = express();

//Debug Teste log 
const morgan = require('morgan');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));

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