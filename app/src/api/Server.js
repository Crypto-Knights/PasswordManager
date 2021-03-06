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

app.use(express.json());
app.use(flash());
app.use(cors());
app.use(express.json());
app.use(session( {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize(undefined));
app.use(passport.session(undefined));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully")
});


async function getUserByEmail(email) {
    return await User.find({email: email})
}

async function getUserById(id) {
    console.log(id);
    return await User.find({_id: id})
}

initializePassport(passport, getUserByEmail, getUserById);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const jwtLogin = require('./routes/jwtToken');
app.use('/login', jwtLogin);

const accountsRouter = require('./routes/accounts');
app.use('/accounts', accountsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
