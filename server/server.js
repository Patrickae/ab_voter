const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const uri = 'mongodb+srv://andy:abcd1234@cluster0.vfodosd.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 3001;

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// allow cross origin requests
app.use(cors());
mongoose.connect(uri).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)));

app.use(authRoutes);

// ab_project
// joUJHYDc6LuksQee
