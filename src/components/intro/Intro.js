import AnchorLink from "react-anchor-link-smooth-scroll";
import "./intro.css";
import {useSelector} from 'react-redux';
import Hero from "../../img/hero5.jpg";

function Intro() {
  const darkMode = useSelector(state => state.ui.darkMode);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h2 className="i-name">Jason Mwatu</h2>
          <h2 className="i-intro">I am a...</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Web Designer (UI/UX)</div>
              <div className="i-title-item">WordPress Expert</div>
              <div className="i-title-item">Mobile App Developer</div>
            </div>
          </div>
          <p className="i-desc">
            {/* I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores. */}
            Let me help you bring your dream idea to life. I specialize in creating stylish, modern websites, web
            services, mobile apps and online stores. Are you interested in setting up your own website or mobile app?
          </p>
          <AnchorLink href='#contact-form'>
          <button className="i-CTA"> Let's Talk </button>
          </AnchorLink>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke={darkMode ? "white" : "black"}
          className="i-scroll bounce"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={MeDark} alt="jason mwatu" className="i-img" /> */}
        
        <div className="i-card bg"></div>
        <div className="i-card">
          <img
            src={Hero}
            alt=""
            className="i-card-img"
          />
        </div>
      
      </div>
    </div>
  );
}

export default Intro;
