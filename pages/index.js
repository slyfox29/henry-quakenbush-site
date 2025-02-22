import Layout from '../components/Layout';

const socialLinks = [
  {
    "title": "Youtube Group",
    "url": "https://www.youtube.com/@seaofglass46",
    "logo": "/logos/youtube.svg",
    "noFilter": true
  },
  {
    "title": "Youtube",
    "url": "https://www.youtube.com/@thequakenmusic",
    "logo": "/logos/youtube.svg",
    "noFilter": true
  },
  {
    "title": "Flat.io",
    "url": "https://flat.io/@thequakenmusic/published",
    "logo": "/logos/flat.svg"
  },
  {
    "title": "GitHub",
    "url": "https://github.com/slyfox29",
    "logo": "/logos/github.png"
  }
];

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
