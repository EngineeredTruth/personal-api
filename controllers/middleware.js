var skills = require('../models/skills.js')
var mainCtrl = require('../controllers/ctrl.js');

// var userName = "Matt";
// var pin = 1988;

module.exports = {

    addHeaders: function(req, res, next) {
        res.status(200).set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        });

        next();
    },
    generateID: function(req, res, next) {
        req.id = skills.length
        next();
    },
    checkLogin: function(req, res, next) {

        if (req.params.username == 'matt' && req.params.pin == "1988"){
          next();
        } else {
          console.log(error);
          res.status(403).send();
        }
    }

}
