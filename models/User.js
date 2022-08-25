const {Schema, model, SchemaTypes} = require('mongoose')
const Thought = require('./Thought')
const { isEmail } = require('validator')


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'not an email']
    },
    thoughts: [{
        type: SchemaTypes.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true
    }
}
)

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', userSchema)

module.exports = User