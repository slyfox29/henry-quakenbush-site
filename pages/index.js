import Layout from '../components/Layout';
import socialLinks from '../data/social.json';

export default function Home() {
  return (
    <Layout>
      <header className="hero">
        <h1 className="hero-title illuminated">Henry Quakenbush</h1>
        <p className="hero-subtitle">Creative thinker, digital explorer, and storyteller.</p>
      </header>
      <section className="social-grid">
        {socialLinks.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card glass-card"
          >
            <img src={link.logo} alt={`${link.title} logo`} className="social-logo" />
            <span>{link.title}</span>
          </a>
        ))}
      </section>
    </Layout>
  );
}
