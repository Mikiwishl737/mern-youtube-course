const {Schema, model, Types} = require('mongoose')

const schema = new Schema ( {
    ID: {type: Number, default:0, unique:true },
    name: {type: String, required:true},
    surname: {type: String, required:true},
    telephone: {type: String, required:true},
    section:{type:String, required:true},
    updated: {type: Date, default: Date.now},
    updated2: {type: Date, default: () => Date.now() + 30*24*60*60*1000},
    links: [{type: Types.ObjectId, ref: 'Link' }]
})

module.exports = model('Product', schema )