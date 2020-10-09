const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const bookmarkRoutes = require('./routes/bookmarks');
const middlewares = require('./middlewares');

const app = express();

mongoose.connect('mongodb://localhost/bookmarker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello 🌎',
  });
});

app.use('/api/bookmarks', bookmarkRoutes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

// https://youtu.be/5pQsl9u_10M?t=5400
