import FadeInWrapper from "../components/FadeInWrapper";

export default function About() {
  return (
    <FadeInWrapper>
      <section>
        <h2>About Me</h2>
        <img
          src="/src/assets/headshot.jpg"
          alt="Ornella Nshimiyimana Headshot"
          style={{ width: "300px", borderRadius: "90%" }}
        />
        <p>
          Hi, I'm Ornella Nshimiyimana. I’m currently pursuing my Web &
          Interactive Design studies at the University of Central Florida. With
          a strong foundation in the technical and creative aspects of digital
          media, I specialize in crafting impactful, visually engaging, and
          user-centered digital experiences that address contemporary
          challenges. I’m excited to bring my fresh ideas, problem-solving
          skills, and collaborative energy to a forward-thinking team.
        </p>
        <h3>Skills</h3>
        <p>
          I dabble in a little bit of everything, but thrive at the crossroads
          of creativity, construction, and collaboration.
        </p>
        <ul>
          <li>Visual Arts & Design</li>
          <li>Marketing & Branding</li>
          <li>Full-Stack Development</li>
        </ul>
      </section>
    </FadeInWrapper>
  );
}
