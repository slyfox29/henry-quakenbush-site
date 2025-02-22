import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'posts.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const posts = JSON.parse(await fs.readFile(filePath, 'utf8'));
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const posts = JSON.parse(await fs.readFile(filePath, 'utf8'));
    const newPost = { id: Date.now(), title: req.body.title, content: req.body.content, date: new Date().toISOString() };
    posts.push(newPost);
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
    res.status(201).json(newPost);
  } else {
    res.status(405).end();
  }
}
