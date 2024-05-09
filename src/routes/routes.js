// VERBOS HTTP (4 TIPOS)
// GET - Obter dados
// POST - Enviar/receber dados
// PUT - Atualizar dados
// DELETE - Remover dados

const router = require('express').Router();

const ProductController = require('../controllers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.delete)

module.exports = router