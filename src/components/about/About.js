import "./about.css";
import about from "../../img/about.jpg";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am an IT and programming enthusiast. I like to look for solutions
          and enjoy solving tasking challenges.
        </p>
        <p className="a-desc">
          I view myself as an avid and enthusiastic learner. I value creativity,
          hard-work and I am persistent in the quest for personal and group
          excellence. I am always willing to try different ideas and ways of
          doing things when the need arises.
        </p>
        <br />
        <p className="a-desc">
          I have extensive training and experience as a web developer, designer
          and UI/UX expert. My skills are based on my own career path which has
          taken me from developing simple calculator games to a fully-fledged
          full-stack web apps. I specialize in website development, mobile app
          development and user interface design for online stores. My
          professional services range from pre-launch to production to
          maintenance.
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
    </div>
  );
};

export default About;
