import { ObjectID } from 'bson'
import {Schema, model, SchemaTypes} from 'mongoose'


const reactionSchema = new Schema({
    reactionId: {
        type: ObjectID,
        default: new ObjectID
    },
    reactionBody: {
        type: String,
        require: true,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

const Reaction = model('Reaction', reactionSchema)

module.exports = Reaction