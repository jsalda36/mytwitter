const router = require('express').Router();

router.get('/twets', (req,res) => {
    res.send('Todos los twets');
});

module.exports = router;