import Layout from '../components/Layout';
import posts from '../data/posts.json';

export default function Blog() {
  return (
    <Layout>
      <section className="blog">
        <h2 className="section-title">Blog</h2>
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-content">{post.content}</p>
              <small className="blog-date">{new Date(post.date).toLocaleDateString()}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
