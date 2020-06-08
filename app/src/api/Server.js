const axios = require('axios');
let User = require('./Model/user.model');
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const initializePassport = require('./user/passport-config');
const app = express();
const port = process.env.PORT || 5000;
const flash = require('express-flash');
const session = require('express-session');

require('dotenv').config();

app.use(flash());
app.use(cors());
app.use(express.json());
app.use(session( {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully")
});


async function getUserByEmail(email) {
    const user = await User.find({email: email});
    return user
}

async function getUserById(id) {
    console.log(id);
    const user = await User.find({_id: "5edb66cc97eb8d9303807ce8"})
    return user
}

// async function getUserById(id) {
//     console.log(id)
//     const user = await User.find({_id: "5edb66cc97eb8d9303807ce8"})
//     return user
// }

initializePassport(passport, getUserByEmail, getUserById);


const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});

