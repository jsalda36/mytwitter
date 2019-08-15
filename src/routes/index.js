const router = require('express').Router();

const usuario = require('../models/users');

const passport = require('passport');



router.get('/registro', (req,res) => {
    res.render('registro');
});

router.post('/registro', async(req,res) => {
    const {nombre, correo, contrasena, contrasena2} = req.body;
    const errors=[];
    if(nombre.length <= 0){
        errors.push({text: 'Por favor insertar el nombre'});
    }
    if(correo.length <= 0){
        errors.push({text: 'Por favor insertar el correo'});
    }
    if(contrasena != contrasena2){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if(contrasena.length < 4){
        errors.push({text: 'Contraseña con mínimo 4 caracteres'});
    }
    if(errors.length > 0){
        res.render('registro',{errors, nombre, correo, contrasena});
    }
    else{
     const correoUsuario = await usuario.findOne({correo: correo});
     if (correoUsuario){
         req.flash('error_msg', 'Correo ya en uso');
         res.redirect('/registro'); 
     }
     const nuevoUsuario = new usuario({nombre, correo, contrasena2});
     nuevoUsuario.contrasena = await nuevoUsuario.encryptPassword(contrasena);
     await nuevoUsuario.save();
     req.flash('success_msg', 'Te haz registrado');
     res.redirect('/'); 
    }
});

router.get('/', (req,res) => {
    res.render('index');
});

router.post('/', passport.authenticate('local',{    
    successRedirect: '/twets',
    failureRedirect: '/',
    failureFlash: true

}));

router.get('/salir',(req,res) => {
        req.logOut();
        res.redirect('/');

});
module.exports = router;