const api_router = require('express').Router();
const { User, Thought } = require('../models');

api_router.get('/users', async (req, res) => {
     
});

api_router.get('/users/:id', (req, res) => {

});


api_router.post('/users', (req, res) => {

});


api_router.put('/users/:id', async (req, res) => {

});


api_router.delete('/users/:id', async (req, res) => {

});




api_router.get('/thoughts', async (req, res) => {

});

api_router.get('/thoughts/:id', async (req, res) => {

});

api_router.post('/thoughts', async (req, res) => {

});

api_router.delete('/thoughts/:thoughtId', async (req, res) => {

})

api_router.post('/thoughts/:thoughtId/reactions', async (req, res) => {

});

api_router.delete('/thoughts/:thoughtId/reactions', async (req, res) => {

});

// FRIENDS 
api_router.post('/users/:userId/friends/:friendId', async (req, res) => {

});

api_router.delete('/users/:userId/friends/:friendId', async (req, res) => {


})


module.exports = api_router;