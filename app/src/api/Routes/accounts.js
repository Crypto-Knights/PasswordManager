const router = require('express').Router();
let Account = require('../Model/account.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const passport = require('passport')

router.route('/getAccounts').get((req,res) => {
    Account.find()
        .then(accounts => res.json(accounts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/accounts').get((req,res) => {
    console.log("accounts loaded")
})



router.post('/profile',  passport.authenticate('local'), (req, res) => {
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

router.route('/:idAccount').get((req,res) => {
    Account.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addAccount').post(async (req,res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const account = req.body.account
        const password = hashedPassword
        const username = req.body.username

        const newAccount = new Account ({
            account,
            username,
            password,
        })
        newAccount.save()
        .then(() => res.json('Account added!'))
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