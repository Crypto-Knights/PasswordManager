require('dotenv').config();
const router = require('express').Router();
let User = require('../Model/user.model');
const bcrypt = require('bcrypt');


// noinspection JSUnresolvedFunction
router.route('/getQuestion').post((req,res) => {
    const email = req.body.email;
    User.find({email: email})
        .then(users=>res.json(users[0].questionOne))
        .catch(err => res.status(400).json('Error: ' + err))
});

// noinspection JSUnresolvedFunction
router.route('/authorizeChange').post(async (req,res) => {
    try {
        const answerOne = req.body.answerOne;
        const email = req.body.email;
        const user = await User.find({email: email});
        if (await bcrypt.compare(answerOne, user[0].answerOne)) {
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (e) {
        res.status(400).json("Error: " +  e)
    }

});

// noinspection JSUnresolvedFunction
router.route('/newPassword').put(async (req,res) => {
    try {
        res.send("hello");
        const salt = await bcrypt.genSalt();
        const newPassword = await bcrypt.hash(req.body.password, salt);
        const email = req.body.email;
        const user = await User.find({email: email});
        user[0].password = newPassword;
        user[0].save()
            .then(res.send(true))
            .catch(err => res.status(400).json('Error: ' + err))
    } catch (e) {
        res.status(400).json("Error: " +  e)
    }
});

// noinspection JSUnresolvedFunction
router.route('/add').post(async (req,res) => {
    try {
        const salt = await bcrypt.genSalt();
        const answerOne = await bcrypt.hash(req.body.answerOne, salt);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const email = req.body.email;
        const password = hashedPassword;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const questionOne = req.body.questionOne;

        const newUser = new User ({
            email,
            password,
            firstName,
            lastName,
            questionOne,
            answerOne
        });
        newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
        // User.push(newUser)

    } catch {
        res.status(500).json()
    }
});


module.exports = router;