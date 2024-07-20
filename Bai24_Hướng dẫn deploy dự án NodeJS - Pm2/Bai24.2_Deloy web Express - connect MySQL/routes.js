// routes.js

const express = require('express');
const router = express.Router();
const connection = require('./mysqlConnection');


const routes = [
  { path: '/api/posts', method: 'GET' },
  { path: '/posts', method: 'GET' }
];

router.get('/', (req, res) => {
  const routeList = routes.map(route => `<a href="${route.path}">${route.method.toUpperCase()} ${route.path}</a>`).join('<br>');
  res.send(`<h1>List of Routes:</h1><p>${routeList}</p>`);
});

router.get('/api/posts', (req, res) => {
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      console.error('Error querying MySQL: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results);
  });
});

router.get('/posts', (req, res) => {
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) {
      console.error('Error querying MySQL: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.render('posts', { posts: results });
  });
});


module.exports = router;
