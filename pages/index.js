import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import socialLinks from '../data/social.json';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds minimum
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="snake-game">
          <div className="snake"></div>
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
      <section className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/icons/design.svg" alt="Design" className="skill-icon" />
            <span className="skill-name">Graphic Design</span>
          </div>
          <div className="skill-card">
            <img src="/icons/code.svg" alt="Code" className="skill-icon" />
            <span className="skill-name">Coding</span>
          </div>
          <div className="skill-card">
            <img src="/icons/bike.svg" alt="Bike" className="skill-icon" />
            <span className="skill-name">Mountain Biking</span>
          </div>
          <div className="skill-card">
            <img src="/icons/photo.svg" alt="Photo" className="skill-icon" />
            <span className="skill-name">Photography</span>
          </div>
          <div className="skill-card">
            <img src="/icons/art.svg" alt="Art" className="skill-icon" />
            <span className="skill-name">Art</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
