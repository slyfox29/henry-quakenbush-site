const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files
app.use(express.json()); // Parse JSON requests

// Serve pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/blog', (req, res) => res.sendFile(path.join(__dirname, 'public', 'blog.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));

// API for blog posts
app.get('/api/posts', async (req, res) => {
    const posts = JSON.parse(await fs.readFile('posts.json', 'utf8'));
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const posts = JSON.parse(await fs.readFile('posts.json', 'utf8'));
    const newPost = { id: Date.now(), title: req.body.title, content: req.body.content, date: new Date().toISOString() };
    posts.push(newPost);
    await fs.writeFile('posts.json', JSON.stringify(posts, null, 2));
    res.status(201).json(newPost);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
    console.log('Contact Form Submission:', req.body); // In real use, save to DB or email
    res.status(200).send('Message received!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
