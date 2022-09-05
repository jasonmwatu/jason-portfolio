import "./intro.css";
import Me from "../../img/me.jpg";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Jason Mwatu</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">React Front-End Developer</div>
              <div className="i-title-item">PHP Back-End Developer</div>
              <div className="i-title-item">Python Enthusiast</div>
              <div className="i-title-item">Future Ruby Magician 🐱‍🏍</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Me} alt="jason mwatus picture" className="i-img" /> */}
      </div>
    </div>
  );
}

export default Intro;
