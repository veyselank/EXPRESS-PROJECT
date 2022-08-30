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

app.post('/friends', );

app.get('/friends', );

app.get('/friends/:friendId', );

app.get('/messages', messagesController.getMessage);

app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});