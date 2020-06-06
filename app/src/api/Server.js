const axios = require('axios');

let User = require('./Model/user.model');
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')
const initializePassport = require('./user/passport-config')
const app = express();
const port = process.env.PORT || 5000;
const flash = require('express-flash')
const session = require('express-session')

require('dotenv').config();

const users = [{
    email: "rod",
    password: "$2b$10$yQ4EV1hoBPVeMfTVi1Hp4eICHaVbo2avIIL3ahraVMSmQuRME0DFm"
}]
app.use(flash())
app.use(cors());
app.use(express.json());
app.use(session( {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established succesfully")
});


async function getUserByEmail(email) {
    // console.log(User.find({email: email}).then(res => console.log(res)))
    const user = await User.find({email: email})
    return user


}

initializePassport(passport, getUserByEmail)

// initializePassport(passport, (email) =>{
//     axios.post('/getAllUsers', {email: email})
//         .then(res => console.log('here'))
// })

// initializePassport(
//     passport,
//     (email) => User.find(user => {
//         return user.email === email})
// )
// app.post('/users/login', passport.authenticate('local', {
//     successRedirect: '/Profile',
//     failureRedirect: '/',
//     failureFlash: true
// }));

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});

// const express = require('express');
// const db = require('./db');
// const collection = "users";
// const ServerApp = express();
// const bodyParser = require('body-parser');
// ServerApp.use(bodyParser.json());
// const path = require('path');
//
//
//
// db.connect((err) => {
//     if (err) {
//         console.log("unable to connect to database");
//         process.exit(1);
//     } else {
//         ServerApp.listen(3000, () => {
//             console.log('connected to database, server listening on port 3000')
//         });
//     }
// });
//
// ServerApp.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// });
//
// ServerApp.post('/Signup', (req,res) => {
//     const userInput = req.body;
//     db.getDB().collection(collection).insertOne(userInput, (err,result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.json({result: result, document: result.ops[0]})
//         }
//     })
// })
//
// ServerApp.get('/getUsers', (req,res) =>{
//     db.getDB().collection(collection).find({}).toArray((err,documents) =>{
//         if(err)
//             console.log(err);
//         else {
//             console.log(documents);
//             res.json(documents)
//         }
//     })
// });
//

// const bodyParser = require('body-parser');
// const server = express();
// server.use(bodyParser.json());
// const path = require('path');
//
// const db = require('./db');
// const collection = "users";

// server.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// });
//
// server.get('/getUsers', (req,res) =>{
//     db.getDB().collection(collection).find({}).toArray((err,documents) =>{
//         if(err)
//             console.log(err);
//         else {
//             console.log(documents);
//             res.json(documents)
//         }
//     })
// });
//
// server.put('/:id',(req,res) =>{
//     const todoID = req.params.id;
//     const userInput = req.body;
//
//     db.getDB().collection(collection).findOneAndUpdate({_id: db.getPrimaryKey(todoID)}, {$set: {todo: userInput.todo}}, {returnOriginal: false}, (err,result) => {
//         if(err)
//             console.log(err);
//         else {
//             res.json(result)
//         }
//         })
// });
//
// server.post('/', (req,res) => {
//     const userInput = req.body;
//     db.getDB().collection(collection).insertOne(userInput, (err,result) =>{
//         if(err)
//             console.log(err);
//         else {
//             res.json({result: result, document: result.ops[0]})
//         }
//     })
// });
//
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
//
// db.connect((err) => {
//     if (err) {
//         console.log("unable to connect to database");
//         process.exit(1);
//     } else {
//         server.listen(3000, () => {
//             console.log('connected to database, server listening on port 3000')
//         });
//     }
// });