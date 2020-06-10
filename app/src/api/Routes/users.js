require('dotenv').config();
const router = require('express').Router();
let User = require('../Model/user.model');
const bcrypt = require('bcrypt');

router.route('/getUsers').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req,res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const email = req.body.email;
        const password = hashedPassword;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const questionOne = req.body.questionOne;
        const answerOne = req.body.answerOne;

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

module.exports = router;