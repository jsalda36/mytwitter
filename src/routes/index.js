const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('index.hbs');
});
router.get('/', (req,res) => {
    res.render('registro.hbs');
});

module.exports = router;