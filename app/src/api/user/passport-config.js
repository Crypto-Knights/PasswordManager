const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

//getUserByEmail
function initialize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => {
        const user = await getUserByEmail(email)
        if(user === null) {
            console.log("no user was found")
            return done(null, false, {message: 'No user with that email was found'})
        }
        try {
            if(await bcrypt.compare(password, user[0].password)) {
                console.log("user was found");
                done(null, user)
            } else {
                console.log(await bcrypt.compare(password, user.password))
                console.log("password was incorrect");
                return done(null, false, {message: 'Password incorrect'})
            }
        } catch (e) {
            return done(e)
        }
    }


    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser));
    passport.serializeUser((user, done) => {})
    passport.deserializeUser((id, done) => {})

}

module.exports = initialize;