const mongoose = require('mongoose');
const { Schema } = mongoose;

const TwetSchema = new Schema({
    texto: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('twet', TwetSchema);