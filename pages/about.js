import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="about">
        <img
          src="/photo.jpg" // Replace with your photo path in public/
          alt="Henry Quakenbush"
          className="about-photo"
        />
        <div className="about-content">
          <h2 className="section-title illuminated">About Me</h2>
          <p className="about-text">
            I’m Henry Quakenbush—a [your profession, e.g., designer, developer, writer] with a passion for crafting meaningful experiences. 
            Whether it’s through code, words, or visuals, I thrive on turning ideas into reality. Based in [your location], I’m inspired by 
            [your influences—e.g., technology, nature, art]. My journey started [brief origin story, e.g., tinkering with computers as a kid], 
            and now I’m here building this digital space.
          </p>
          <p className="about-text">
            Beyond work, I’m an avid [hobby 1—e.g., hiker], a [hobby 2—e.g., sci-fi reader], and a occasional [hobby 3—e.g., sketch artist]. 
            I believe in minimalism with purpose—less noise, more impact. This site is my hub to share insights, projects, and a bit of my world.
          </p>
        </div>
      </section>
    </Layout>
  );
}
