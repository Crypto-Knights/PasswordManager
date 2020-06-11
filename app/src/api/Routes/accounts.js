const router = require('express').Router();
let Account = require('../Model/account.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const passport = require('passport')
const authenticateToken = require('../user/authenticateToken')

router.route('/getAccounts').get((req,res) => {
    Account.find()
        .then(accounts => res.send(accounts))
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


router.route('/:idAccount').get((req,res) => {
    Account.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/addAccount', async (req,res) => {
    try {
        let email;
        jwt.verify(req.body.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
            if(err){
                res.sendStatus(403);
            } else {
                email = authData.name
            }
        });
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const accountName = req.body.accountName;
        const password = hashedPassword;
        const userName = req.body.userName;
        const newAccount = new Account ({
            email,
            accountName,
            userName,
            password,
        });
        newAccount.save()
        .then(() => res.json('Account added!'))
        .catch(err => res.status(400).json('Error: ' + err));

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