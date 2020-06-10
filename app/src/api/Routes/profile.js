const router = require('express').Router();
let User = require('../Model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require('passport');

router.route('/getProfiles').get((req,res) => {
    User.find()
        .then(profiles => res.json(profiles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/Profile').get((req,res) => {
    console.log("profile saved")
});



router.post('/Profile',  passport.authenticate('local'), (req, res) => {
    res.send(true)
});

// router.route('/login').post((req,res) => {
//     //Authenticate User
//     const email = req.body.email
//     const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET)
//     res.json({accessToken: accessToken})
// })

//todo follow steps on https://www.youtube.com/watch?v=mbsmsi7l3r4 - 10:48
function authenticateToken(req,res,nex) {

}

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(profiles => res.json(profiles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req,res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const accountName = req.body.accountName;
        const userName = req.body.userName;
        const password = hashedPassword;

        const newUser = new User ({
          accountName,
          userName,
          password,
        });
        newProfile.save()
        .then(() => res.json('Profile added!'))
        .catch(err => res.status(400).json('Error: ' + err));
        // User.push(newUser)

    } catch {
        res.status(500).json()
    }



});


// server.delete('/:id', (req, res) => {
//     const todoID = req.params.id;
//
//     db.getDB().collection(collection).findOneAndDelete({_id: db.getPrimaryKey(todoID)}, (err,result) => {
//         if(err)
//             console.log(err);
//         else {
//             res.json(result)
//         }
//     })
// })

module.exports = router