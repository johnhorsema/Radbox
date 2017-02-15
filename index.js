const express = require('express')
const compress = require('compression');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public', 'assets')));

// Login
app.use('/login', express.static(path.join(__dirname, 'src', 'login')));

// Signup
app.use('/signup', express.static(path.join(__dirname, 'src', 'signup')));

// Documentation
app.use('/docs', express.static(path.join(__dirname, 'docs')));

// Landing page (/)
// Main application (/app)
app.all('/*', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000);