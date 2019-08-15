const router = require('express').Router();

const twet = require('../models/twet');
const { isAuthenticated } = require('../helpers/outs');

router.get('/twets/add', isAuthenticated, (req,res) => {
    res.render('twets/new-twet');
});
router.post('/twets/new-twet', isAuthenticated, async(req,res) => {
    const { texto } = req.body;
    const error = [];
    if(!texto){
        error.push({text:'Por favor escribe un twet'});
    }
    if(error.length > 0){
        res.render('twets/new-twet', {
            error
        });
    }
    else{
        const NuevoTwet= new twet({texto});
        await NuevoTwet.save();
        req.flash('success_msg', 'Twet agregado');
        res.redirect('/twets');
    }
});
router.get('/twets', isAuthenticated, async(req,res) => {
   const twets = await twet.find().sort({date: 'desc'});
   res.render('twets/all-twets', {twets});
});
router.get('/twets/edit/:id', isAuthenticated, async(req,res) => {
    const tweters = await twet.findById(req.params.id);
    res.render('twets/edit-twets', {tweters} );
});
router.put('/twets/edit-twets/:id', isAuthenticated, async(req,res) => {
    const {texto}= req.body;
    await twet.findByIdAndUpdate(req.params.id, {texto});
    req.flash('success_msg', 'Nota actualizada');
    res.redirect('/twets');
});
router.delete('/twets/borrar/:id',isAuthenticated,  async(req,res) => {
    await twet.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Twet borrado');
    res.redirect('/twets');
});

module.exports = router;