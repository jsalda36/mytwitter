const router = require('express').Router();

router.get('/users/signin', (req,res) => {
    res.send('Ingresando a la aplicación');
});

router.get('/users/signup', (req,res) => {
    res.send('Formulario acá');
});

module.exports = router;