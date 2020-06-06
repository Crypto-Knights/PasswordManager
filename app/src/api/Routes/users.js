const router = require('express').Router();
let User = require('../Model/user.model');

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const questionOne = req.body.questionOne;
    const answerOne = req.body.answerOne;
    const newUser = new User({email, password, firstName, lastName, questionOne, answerOne});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
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