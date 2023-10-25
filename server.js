const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js engine
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));  // Serve the public directory

// Session middleware
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

// Routes
const routes = require('./controllers');  // Assuming you've a main index.js in controllers that bundles all routes
app.use(routes);

// Start the server after connecting to the database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
