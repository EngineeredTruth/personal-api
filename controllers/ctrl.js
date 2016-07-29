var middleware = require('../controllers/middleware.js');
var skills = require('../models/skills.js');
var name = {
    "name": 'Matt Tran'
};

var hobbies = [{
    "name": "Watching cartoons",
    "type": "current"
}, {
    "name": "Quacking",
    "type": "past"
}];

var location = {
    'location': 'Provo, UT'
};

var occupations = ['Social Media', 'Web Developer'];

module.exports = {
    getName: function(req, res, next) {
        res.json(name);
    },
    getLocation: function(req, res, next) {
        res.json(location);
    },
    getOccupations: function(req, res, next) {
        console.log(req.query.order);
        if (req.query.order == "desc") {
            res.json(occupations.sort())
        } else if (req.query.order == "asc") {
            res.json(occupations.sort().reverse());
        }
    },
    getLatestOccupation: function(req, res, next) {
        res.json({
            lastOccupation: occupations[occupations.length - 1]
        });
    },
    getHobbies: function(req, res, next) {
        res.json({
            hobbies: hobbies
        });
    },
    getHobbiesType: function(req, res, next) {
        var results = [];
        for (var i in hobbies) {
            if (hobbies[i].type === req.params.type) {
                console.log(i);
                results.push(hobbies[i]);
            }
        }
        res.json({
            results
        });
    },
    changeName: function(req, res, next) {
        console.log(req.body);
        name = req.body;
        res.json(name);
    },
    changeLocation: function(req, res, next) {
        console.log(req.body);
        location = req.body;
        res.json(location);
    },
    addHobby: function(req, res, next) {
        hobbies.push(req.body);
        res.json(hobbies);
    },
    addOccupation: function(req, res, next) {
        console.log(req.body);
        occupations.push(req.body);
        res.send(occupations);
    },
    getSkills: function(req, res, next) {
        if (req.query) {
          var results = [];
          // console.log(req.query);
            // req.query.experience = req.query.experience.toLowerCase();
            for (var i in skills) {
                if (skills[i].experience == req.query.experience) {
                    console.log(skills[i].experience);
                    results.push(skills[i]);
                }
            }
            res.json(results);
        } else {
            res.json(skills);
        }
    },
    addSkill: function(req, res, next) {
        skills.push({
            id: req.ID,
            name: req.body.name,
            experience: req.body.experience
        });
        res.json(skills);
    },
    getSecret: function(req, res, next) {
      res.json({'success' : 'success'});
    }
}
