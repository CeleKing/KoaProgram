var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    signature: { type: String },
    created_at: { type: Date, default: Date.now },
    update_at: { type: String, default: Date.now}
})

UserSchema.index({name: 1})

module.exports = mongoose.model('User', UserSchema)