// Global imports
const express = require('express');
const dotenv = require('dotenv');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

// Local import
const schema = require('./graphql');

// Define App
const app = express();

// Init ENV variables
dotenv.config();

// Set up DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected!!!'));

// Apply middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// Listen to port
app.listen(process.env.PORT, () =>
  console.log(`app listening on port ${process.env.PORT}`)
);
