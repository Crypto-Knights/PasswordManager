const router = require('express').Router();
let Account = require('../Model/account.model');
const jwt = require('jsonwebtoken')
const CryptoJS = require('crypto-js')
const bcrypt = require('bcrypt')
const passport = require('passport')
const authenticateToken = require('../user/authenticateToken')

router.route('/getAccounts').get((req,res) => {
    Account.find()
        .then(accounts => res.send(accounts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/getAccountsByEmail', async (req,res) => {

    let email;
    jwt.verify(req.body.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            email = authData.name
        }
    });
    Account.find({email: email})
        .then(accounts => res.send(accounts))
        .catch(err => res.status(403).json("Error: " + err))
})

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
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const accountName = req.body.accountName;
        const password = CryptoJS.AES.encrypt(req.body.password, process.env.SUPER_SECRET_KEY)
        // const password = hashedPassword;
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