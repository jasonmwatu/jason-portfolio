import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
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
      </div>
    </div>
  );
};

export default About;
