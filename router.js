const express = require("express")
const Router = express.Router();

const Home = require('./endpoints/home')
const About = require('./endpoints/about')
const Info = require('./endpoints/info')

Router.get('/', Home);
Router.get('/about', About);
Router.get('/info', Info);

module.exports = Router