const express = require('express');
const router  = express.Router();
const mysql = require('../mysql').pool;

//Router GET - Retorna todos osprodutos
router.get('/', (req, res, next) => {
    // res.status(200)
    // .send({
    //     mensagem: 'GET rota produtos'
    // });

    //Select db
    mysql.getConnection((error, conn) => {
        
        if(error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM produtos;',
            (error, result, fields) => {
                if(error) { return res.status(500).send({ error: error }); }
                return res.status(200).send({
                    response: result
                });
            }
        );

    });
});

//router insert POST
router.post('/', (req, res, next) => {
    
    // const produto = {
    //     nome: req.body.nome,
    //     preco: req.body.preco
    // };

    //db insert 
    mysql.getConnection((error,conn) => {
        
        if(error) {
            return res.status(500).send({
                error: error
            });
        }
        conn.query(
            'INSERT INTO produtos (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            
            //callback
            (error, result, field) => {
                //libera a conexão
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    mensagem: 'Inserido com sucess',
                    id_produto: result.insertId 
                })
            }

        )
    });

    // res.status(200).send({
    //     mensagem: 'POST produtos',
    //     produtoCriado: produto

    // });

});

//router SELECT produtos
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;

    // if(id == 'especial') { res.status(200) .send({ mensagem: "PAssando param ", ID:id }); } else {
    //     res.status(200) .send({ mensagem: "SEM PARAMS" }); }

      //Select db
      mysql.getConnection((error, conn) => {
        
        if(error) { return res.status(500).send({ error: error }); }
        conn.query(
            'SELECT * FROM produtos WHERE id_produtos= ?',
            [req.params.id_produto],
            (error, result, fields) => {
                if(error) { return res.status(500).send({ error: error }); }
                return res.status(200).send({
                    response: result
                });
            }
        );

    });

});

//PATCH -Alterar um produto
router.patch('/', (req, res, next) => {
    // res.status(200) .send({ mensagem: 'PATCH produtos' });
    //db update 
     mysql.getConnection((error,conn) => {
        
        if(error) {
            return res.status(500).send({
                error: error
            });
        }
        conn.query(
            `UPDATE produtos 
                SET nome = ?,
                    preco = ? 
                WHERE id_produtos = ?`,
            [
                req.body.nome, 
                req.body.preco,
                req.body.id_produto
            ],
            
            //callback
            (error, result, field) => {
                //libera a conexão
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(202).send({
                    mensagem: 'Alterado com sucess',
                     
                });
            }

        )
    });

});

//delete
router.delete('/', (req, res, next) => {
    // res.status(200) .send({ mensagem: 'DELETE produtos' });

    //db update 
    mysql.getConnection((error,conn) => {
        
        if(error) {
            return res.status(500).send({
                error: error
            });
        }
        conn.query(
            `DELETE FROM produtos 
                WHERE id_produtos = ?`,
            [req.body.id_produto],
            
            //callback
            (error, result, field) => {
                //libera a conexão
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(202).send({
                    mensagem: 'Removido com sucess',
                     
                });
            }

        )
    });

});



module.exports = router;