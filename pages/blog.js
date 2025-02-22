import { useState } from 'react';
import Layout from '../components/Layout';
import posts from '../data/posts.json';

export default function Blog() {
  const [sortBy, setSortBy] = useState('date-desc'); // Default: newest first
  const [votes, setVotes] = useState(posts.reduce((acc, post) => ({
    ...acc,
    [post.id]: { upvotes: 0, downvotes: 0 }
  }), {}));

  const handleVote = (id, type) => {
    setVotes(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: prev[id][type] + 1
      }
    }));
  };

  const sortedPosts = [...posts].sort((a, b) => {
    switch (sortBy) {
      case 'date-asc':
        return new Date(a.date) - new Date(b.date);
      case 'date-desc':
        return new Date(b.date) - new Date(a.date);
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <section className="blog">
        <h2 className="section-title illuminated">Blog</h2>
        <div className="blog-controls">
          <label htmlFor="sort" className="sort-label">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
          </select>
        </div>
        <div className="blog-grid">
          {sortedPosts.map(post => (
            <article key={post.id} className="blog-card glass-card">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-content">{post.content}</p>
              <small className="blog-date">{new Date(post.date).toLocaleDateString()}</small>
              <div className="vote-controls">
                <button
                  onClick={() => handleVote(post.id, 'upvotes')}
                  className="vote-btn upvote"
                >
                  ▲ {votes[post.id].upvotes}
                </button>
                <button
                  onClick={() => handleVote(post.id, 'downvotes')}
                  className="vote-btn downvote"
                >
                  ▼ {votes[post.id].downvotes}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
