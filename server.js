const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Ray Dalio'
    },
    {
        id: 1,
        name: 'Steve Jobs'
    }
];

app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req,res) => {
    if (!req.body.name){
        return res.status(400).json({
            error: 'Missing friend name'
        }); 
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend);
});

app.get('/friends', (req,res) =>{
    res.json(friends);
});

app.get('/friends/:friendId', (req,res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    }
    else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
});

app.get('/messages', messagesController.getMessage);

app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});