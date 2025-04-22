import FadeInWrapper from "../components/FadeInWrapper";
import project1image from "../assets/project1.png";
import project2image from "../assets/project2.jpg";
import project3image from "../assets/project3.png";
import project4image from "../assets/project4.png";

const projects = [
  {
    title: "Shelfmate",
    description: "A pantry management solution with wellness in mind.",
    image: { project1image },
    link: "https://ornella-nsh.framer.website/shelfmate",
  },

  {
    title: "Marketing & Graphic Design",
    description: "A collection of recent graphic design projects.",
    image: { project2image },
    link: "https://ornella-nsh.framer.website/graphic-design",
  },
  {
    title: "Amazon Redesign",
    description:
      "Amazon homepage and navigation redesign for a school project, made in Figma.",
    image: { project3image },
    link: "https://ornella-nsh.framer.website/amazon-redesign",
  },
  {
    title: "ARound the World",
    description: "Augmented Reality app concept & product pitch.",
    image: { project4image },
    link: "https://ornella-nsh.framer.website/around-the-world",
  },
];

export default function Projects() {
  return (
    <FadeInWrapper>
      <section>
        <h2>My Work</h2>
        {projects.map((proj) => (
          <div key={proj.title}>
            <h3>{proj.title}</h3>
            <img src={proj.image} alt={proj.title + " Cover Image"} />
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </section>
    </FadeInWrapper>
  );
}
