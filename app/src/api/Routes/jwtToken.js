require('dotenv').config();
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const generateAccessToken = require('../user/generateAccessToken');
const passport = require('passport');
let User = require('../Model/user.model');


router.route('/logout').post( async (req,res) => {
    let email;
    jwt.verify(req.body.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
        if(err){
            res.sendStatus(403);
        } else {
            email = authData.name
        }
    });
    const user = await User.find({email: email});
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1s'})
});

// router.route('/token').post((req,res) => {
//     const refreshToken = req.body.token;
//     if(refreshToken == null) return res.sendStatus(401);
//     if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
//     jwt.verify(refreshToken, process.env.REFRECH_TOKEN_SECRET, (err, user) => {
//         if(err) return res.sendStatus(403);
//         const accessToken = generateAccessToken({name: user.email});
//         res.json({accessToken: accessToken})
//     })
// });



router.post('/',  passport.authenticate('local'), (req, res) => {
    const email = req.body.email;
    const user = {name: email};
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRECH_TOKEN_SECRET);
    res.json({accessToken: accessToken, refreshToken: refreshToken})
});

module.exports = router;