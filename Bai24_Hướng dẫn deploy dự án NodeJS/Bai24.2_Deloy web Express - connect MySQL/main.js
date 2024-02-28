// app.js

const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
const port = 3001;

// Sử dụng EJS làm template engine
app.set('view engine', 'ejs');

// Đặt thư mục chứa các tệp HTML
app.set('views', path.join(__dirname, 'views'));

// Sử dụng routes từ file routes.js
app.use('/', routes);

// Khởi động server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
