
const mongoose = require('mongoose')


const modelSchema = mongoose.Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

    text:{
        type: String,
        required: [true, 'please add a text value']
    }  
}, {
    timestamps:true,
}
)
module.exports = mongoose.model('User',modelSchema)