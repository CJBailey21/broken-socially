const {Schema, model, SchemaTypes} = require('mongoose')



const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    username: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }],
    reactions: [{
        type: SchemaTypes.ObjectId,
        ref: 'Reactions'
    }]
}, {
    toJSON: {
        virtuals: true
    }
}
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought