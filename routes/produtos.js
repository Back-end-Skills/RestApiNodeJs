const express = require('express');
const router  = express.Router();

//Router GET - Retorna todos osprodutos
router.get('/', (req, res, next) => {
    res.status(200)
    .send({
        mensagem: 'GET rota produtos'
    })
});

//router insert POST
router.post('/', (req, res, next) => {
    
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };

    res.status(200).send({
        mensagem: 'POST produtos',
        produtoCriado: produto

    });

});

router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    if(id == 'especial')
    {
        res.status(200)
            .send({
                mensagem: "PAssando param ",
                ID:id
        });
    } else {
        res.status(200)
            .send({
                mensagem: "SEM PARAMS"
                
        });
    }
});

//PATCH
router.patch('/', (req, res, next) => {
    res.status(200)
    .send({
        mensagem: 'PATCH produtos'
    });

});

//delete
router.delete('/', (req, res, next) => {
    res.status(200)
    .send({
        mensagem: 'DELETE produtos'
    });

});



module.exports = router;