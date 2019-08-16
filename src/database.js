const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/bd', {
mongoose.connect('mongodb://mon:27017/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

    .then(bd => console.log('Base de datos conectada'))
    .catch(err => console.error(err));
