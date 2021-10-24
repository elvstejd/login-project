const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user');
const passport = require('passport');

function initialize(passport) {
    const authenticateUser = async (username, password, done) => {
        const [[user],] = await User.findUserByUsername(username);

        if (!user) {
            return done(null, false, { message: 'No user with that email' });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (err) {
            return done(err);
        }
    };

    passport.use(new LocalStrategy({
        usernameField: 'username'
    }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser(async (id, done) => {
        const [[user],] = await User.findUserById(id);
        console.log(user);
        done(null, user);
    });
}

initialize(passport);

module.exports = passport;
