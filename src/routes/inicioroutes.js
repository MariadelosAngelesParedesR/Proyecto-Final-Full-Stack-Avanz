const express = require ('express');

const router = express.Router();

// controller

const {inicio, formNuevaNoticia, nuevaNoticia, formEditarNoticia, editarNoticia, eliminarNoticia} = require('../controllers/iniciocontroller')
//todas las noticias 
router.get('/', inicio);

//nueva noticia
router.get('/nueva',formNuevaNoticia)
router.post('/nueva', nuevaNoticia)

//editar noticia
router.get('/editar/:id', formEditarNoticia)
router.post('/editar/:id', editarNoticia)

//eliminar noticia
router.get('/eliminar/:id', eliminarNoticia)
module.exports = router;