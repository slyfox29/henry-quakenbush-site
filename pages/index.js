import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <header className="hero">
        <h1 className="hero-title">Henry Quakenbush</h1>
        <p className="hero-subtitle">Creative thinker, digital explorer, and storyteller.</p>
      </header>
      <section className="social-grid">
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-card">Twitter</a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-card">Instagram</a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="social-card">LinkedIn</a>
        <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-card">GitHub</a>
      </section>
    </Layout>
  );
}
