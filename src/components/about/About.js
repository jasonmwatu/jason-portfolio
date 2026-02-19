import "./about.css";
import about from "../../img/about.jpg";

const About = () => {
  return (
    <section className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I’m a web developer who enjoys turning ideas into clean, usable
          websites. I like figuring things out, solving problems, and building
          things that actually work well for real people.
        </p>
        <p className="a-desc">
          I’ve worked on a wide range of projects, from simple pages to more
          complete websites, and I enjoy being involved in the whole process.
          This includes shaping how things look, organizing how everything fits
          together, and making sure the final result feels smooth and intuitive
          for the user. I like keeping things simple, thoughtful, and
          purpose-driven.
        </p>
        <br />
        <p className="a-desc">
          I’m naturally curious and always learning, whether that means trying
          new ideas or finding better ways to approach a problem. I value
          creativity, consistency, and putting care into my work, and I enjoy
          collaborating with others to build things we can be proud of.
        </p>
        {/* <br />
        <p className="a-desc">
          I will help make your product a success by creating engaging websites
          and great-looking mobile apps that convert visitors into loyal
          customers. I guarantee to deliver websites with an intuitive design,
          easy navigation and a solid structure to meet the needs of both
          private and corporate businesses.
        </p> */}
      </div>
    </section>
  );
};

export default About;
