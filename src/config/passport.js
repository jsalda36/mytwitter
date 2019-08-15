const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const usuario = require('../models/users');


passport.use(new LocalStrategy({
    usernameField: 'correo' ,
    passwordField: 'contrasena' 
}, async (correo, contrasena, done)=>{
     const user = await usuario.findOne({correo: correo});
     if(!user){
         return done(null, false, {message: 'Usuario no encontrado'});
     }
     else{
         const match = await user.matchPassword(contrasena);
         if (match){
             return done(null, user);
         }
         else {
             return done(null, false, {message: 'Contraseña incorrecta'});
         }
     }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    usuario.findById(id, (err,user) => {
        done(err, user);
    });
});