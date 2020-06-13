const router = require('express').Router();
let Account = require('../Model/account.model');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const bcrypt = require('bcrypt');
let User = require('../Model/user.model');

router.post('/reauthorize', async (req, res) => {
    let email;
    jwt.verify(req.body.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            email = authData.name
        }
    });
    const user = await User.find({email: email});
    const password = req.body.password;
    try {
        if(await bcrypt.compare(password, user[0].password)) {
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (e) {
        return (e)
    }
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
        const accountName = req.body.accountName;
        const password = CryptoJS.AES.encrypt(req.body.password, process.env.SUPER_SECRET_KEY);
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


module.exports = router;