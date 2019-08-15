const mongoose = require('mongoose');
mongoose.connect('mongodb://mon:27017/notes-db-app',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

    .then(db => console.log('DB is conect'))
    .catch(err=> console.error(err));
