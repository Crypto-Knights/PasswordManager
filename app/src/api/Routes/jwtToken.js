require('dotenv').config();
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const generateAccessToken = require('../user/generateAccessToken');
const passport = require('passport');
let UserToken = require('../Model/token.model');



router.route('/logout').delete((req,res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204)
});

router.route('/token').post((req,res) => {
    const refreshToken = req.body.token;
    if(refreshToken == null) return res.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRECH_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        const accessToken = generateAccessToken({name: user.email});
        res.json({accessToken: accessToken})
    })
});

let refreshTokens = [];


router.post('/',  passport.authenticate('local'), (req, res) => {
    const email = req.body.email;
    const user = {name: email};
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRECH_TOKEN_SECRET);
    res.json({accessToken: accessToken, refreshToken: refreshToken})
});

module.exports = router;