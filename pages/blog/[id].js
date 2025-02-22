import Layout from '../../components/Layout';
import posts from '../../data/posts.json';
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return (
      <Layout>
        <section className="blog-post">
          <h2 className="section-title illuminated">Post Not Found</h2>
          <p>Sorry, this blog post doesn’t exist.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="blog-post">
        <h2 className="section-title illuminated">{post.title}</h2>
        <small className="blog-date">{new Date(post.date).toLocaleDateString()}</small>
        <div className="blog-content glass-card">
          <p>{post.content}</p>
        </div>
      </section>
    </Layout>
  );
}
