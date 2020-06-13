require('dotenv').config();
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const generateAccessToken = require('../user/generateAccessToken');
const passport = require('passport');

router.post('/',  passport.authenticate('local'), (req, res) => {
    const email = req.body.email;
    const user = {name: email};
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRECH_TOKEN_SECRET);
    res.json({accessToken: accessToken, refreshToken: refreshToken})
});

module.exports = router;