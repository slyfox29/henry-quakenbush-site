import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="about">
        <h2 className="section-title illuminated">About Me</h2>
        <p className="about-text">
          I’m Henry Quakenbush—a [your profession, e.g., designer, developer, writer] with a passion for crafting meaningful experiences. 
          Whether it’s through code, words, or visuals, I thrive on turning ideas into reality. 
          Based in [your location], I’m inspired by [your influences—e.g., technology, nature, art].
        </p>
        <p className="about-text">
          When I’m not [your work/activity], you’ll find me [your hobbies—e.g., hiking, reading sci-fi, sketching]. 
          This site is my space to share my journey, thoughts, and connections.
        </p>
      </section>
    </Layout>
  );
}
