const path = require('path');

function getMessage(req,res) {
    res.render('messages', {
        title: 'messages to my friend',
        friend: 'Elon Musk',
    });
    //res.sendFile(path.join(__dirname,'..', 'public', 'images', 'skimountain.jpg'));
    //res.send('<ul><li>Hello Lone Wolf!</li></ul>');
};

function postMessage(req,res){
    console.log('Updating messages...');
}

module.exports = {
    getMessage,
    postMessage,
};