const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let oliveJarSchema = new Schema(
    {
        color: {
            type: String,
            required:true
        },
        quality: {
            type: String,
            required:true
        },
        amount: {
            type: Number,
            required:true
        }
    }
)
let oliveJarModel = mongoose.model('Olivejar',oliveJarSchema,'olivejars')

module.exports = oliveJarModel;