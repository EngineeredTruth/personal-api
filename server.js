var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var middleware = require('./controllers/middleware.js');
var ctrl = require('./controllers/ctrl.js');

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', ctrl.getName);
app.get('/location', ctrl.getLocation);
app.get('/occupations', ctrl.getOccupations);
app.get('/latestoccupations', ctrl.getLatestOccupation);
app.get('/hobbies', ctrl.getHobbies);
app.get('/hobbies/:type', ctrl.getHobbiesType);
app.get('/skills', ctrl.getSkills);
app.get('/secret/:username/:pin', middleware.checkLogin, ctrl.getSecret);

app.put('/name', ctrl.changeName);
app.put('/location', ctrl.changeLocation);

app.post('/hobbies', ctrl.addHobby);
app.post('/occupations', ctrl.addOccupation);
app.post('/skills', middleware.generateID, ctrl.addSkill);

var port = 3000;
app.listen(port, function() {
    console.log("We're listening to: ", port);
});
