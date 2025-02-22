import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) {
      const newPost = await res.json();
      setPosts([...posts, newPost]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <Layout>
      <section className="blog">
        <h2>Blog</h2>
        <div>
          {posts.map(post => (
            <div key={post.id} className="blog-post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <small>{new Date(post.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post..."
            required
          />
          <button type="submit">Add Post</button>
        </form>
      </section>
    </Layout>
  );
}
