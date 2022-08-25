const api_router = require('express').Router();
const User = require('../models/User');
const Thought = require('../models/Thought')
//get all
api_router.get('/users', async (req, res) => {
    const users = await User.find()

    res.send(users)
});
//get by id
api_router.get('/users/:id', (req, res) => {
    const user_id = req.query.user_id
    const user = User.findOne({ _id: user_id })
    res.send(user)
});

//create user
api_router.post('/users', async (req, res) => {
    const user = await User.create(req.body);
  
    res.send(user);
});


api_router.put('/users/:id', async (req, res) => {

});

//delete by id
api_router.delete('/users/:id', async (req, res) => {
    const user = await User.findOne({
        _id: req.query.user_id
      })
      user.id(req.params.user_id).remove()
      user.save()
      res.send(user)
});




api_router.get('/thoughts', async (req, res) => {
    const thoughts = await Thought.find()

    res.send(thoughts)
});

api_router.get('/thoughts/:id', async (req, res) => {
    const thought_id = req.query.thought_id
    const thought = Thought.findOne({ _id: thought_id })
    res.send(thought)
});

api_router.post('/thoughts', async (req, res) => {
    const thought = await Thought.create(req.body);
  
    res.send(thought);
});

api_router.delete('/thoughts/:thoughtId', async (req, res) => {
    const thought = await Thought.findOne({
        _id: req.query.thought_id
      })
      thought.id(req.params.thought_id).remove()
      thought.save()
      res.send(thought)
})


module.exports = api_router;