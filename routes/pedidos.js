const express = require('express');
const router  = express.Router();

//Router GET - Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200)
    .send({
        mensagem: 'GET retorna os  pedidos Nodemon'
    })
});

//Inserir router POST
router.post('/', (req, res, next) => {
    res.status(200)
    .send({
        mensagem: 'POST Inserir Pedidos'
    });

});

//RETORNAR OS DADOS DO PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;

    res.status(200)
        .send({
            mensagem: "Detalhes do Pedidos Nodemon",
            Id_Pedido:id
    });

});

//ALTERAR UM PRODUTO PATCH
router.patch('/', (req, res, next) => {
    res.status(200)
    .send({
        mensagem: 'PATCH pedidos'
    });

});

//delete um produto
router.delete('/', (req, res, next) => {
    res.status(200)
    .send({
        mensagem: 'DELETE pedidos'
    });

});



module.exports = router;