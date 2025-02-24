import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import socialLinks from '../data/social.json';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Minimum 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="snake-game">
          <div className="snake">
            <div className="snake-segment"></div>
            <div className="snake-segment"></div>
            <div className="snake-segment"></div>
          </div>
          <div className="food"></div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <header className="hero">
        <h1 className="section-title illuminated">Henry Quakenbush</h1>
        <p className="hero-subtitle">Graphic Designer, Coder, Mountain Biker, Photographer, Artist</p>
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
            <img
              src={link.logo}
              alt={`${link.title} logo`}
              className={`social-logo ${link.noFilter ? 'no-filter' : ''}`}
            />
            <span>{link.title}</span>
          </a>
        ))}
      </section>
    </Layout>
  );
}
