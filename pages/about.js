import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section className="about">
        <div className="about-photo-container glass-card">
          <img
            src="/henryquakenbush.jpeg"
            alt="Henry Quakenbush"
            className="about-photo"
          />
        </div>
        <div className="about-content">
          <h2 className="section-title illuminated">About Henry Quakenbush</h2>
          <p className="about-text">
            I’m Henry Quakenbush—a graphic designer, coder, mountain biker, photographer, and artist based in Cicero, Indiana. 
            I wear many hats, blending creativity with tech to craft experiences that resonate. Whether I’m designing sleek visuals, 
            coding dynamic web apps, shredding trails on my bike, capturing the beauty of Indiana’s landscapes, or sketching my next piece, 
            I’m driven by a love for making things that matter.
          </p>
          <p className="about-text">
            Growing up in Cicero, I found inspiration in its quiet charm and rugged outdoors. That’s where my journey started—doodling trail maps 
            as a kid, which evolved into a career in graphic design and coding. I’ve built this site with Next.js to share my work and passions, 
            from pixel-perfect designs to gritty biking adventures. When I’m not at my desk, you’ll catch me on the trails around Morse Reservoir, 
            camera in hand, or tinkering with code to bring my art to life.
          </p>
          <p className="about-text">
            My philosophy? Minimalism with purpose—clean lines, bold ideas, and a touch of Indiana soul. Stick around to explore my blog, 
            where I dive into design, tech, biking, and the art of seeing the world through a creative lens.
          </p>
        </div>
      </section>
    </Layout>
  );
}
