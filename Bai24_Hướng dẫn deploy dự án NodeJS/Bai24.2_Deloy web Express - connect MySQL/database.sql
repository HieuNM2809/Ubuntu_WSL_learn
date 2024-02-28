CREATE DATABASE IF NOT EXISTS posts_db;

USE posts_db;

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, content) VALUES
('Post 1', 'This is the content of post 1.'),
('Post 2', 'This is the content of post 2.'),
('Post 3', 'This is the content of post 3.'),
('Post 4', 'This is the content of post 4.'),
('Post 5', 'This is the content of post 5.'),
('Post 6', 'This is the content of post 6.');
