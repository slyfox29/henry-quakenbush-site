import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <header>
        <h1>Henry Quakenbush</h1>
        <p>A place for my thoughts, work, and connections.</p>
      </header>
      <section className="social-links">
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">GitHub</a>
      </section>
    </Layout>
  );
}
