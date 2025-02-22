import Layout from '../../components/Layout';
import posts from '../../data/posts.json';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <Layout>
        <section className="blog">
          <h2 className="section-title illuminated">Post Not Found</h2>
          <p className="blog-content">Sorry, this blog post doesn’t exist.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="blog single-post">
        <h2 className="section-title illuminated">{post.title}</h2>
        <div className="blog-card glass-card">
          <p className="blog-content">{post.content}</p>
          <small className="blog-date">{new Date(post.date).toLocaleDateString()}</small>
        </div>
      </section>
    </Layout>
  );
}
