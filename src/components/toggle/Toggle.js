import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
// import HamburgerMenu from "./Hamburger";
// import { useContext } from "react";
// import { ThemeContext } from "../../context";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/index";

const Toggle = () => {
  // const theme = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);
  // const [activeLink, setActiveLink] = useState("");

  const toggleDarkMode = () => {
    dispatch(uiActions.toggle());
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);
  // const handleMouseEnter = (link) => {
  //   setIsHover(true);
  //   setActiveLink(link);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  //   setActiveLink("");
  // };

  // const handleClick = () => {
  //   // theme.dispatch({ type: "TOGGLE" });
  //   console.log("change theme");
  // };
  return (
    <>
      {/* <HamburgerMenu /> */}
      <div
        className="m"
        onClick={toggleMenu}
        style={{
          boxShadow: darkMode && "0 0 1rem 0 rgba(243, 243, 243, 0.2)",
          backgroundColor: menuOpen
            ? "transparent"
            : "rgba(194, 194, 194, 0.26)",
          // backdropFilter: menuOpen && "unset",
        }}
      >
        {/* <IoMenu style={{color: darkMode && "white", height: "4em"}}/> */}
        <span
          className="m-line"
          style={{
            backgroundColor: darkMode && "white",
            transform: menuOpen && "rotate(-135deg) translate(-3px, -3px)",
          }}
        ></span>
        <span
          className="m-line"
          style={{
            backgroundColor: darkMode && "white",
            display: menuOpen && "none",
          }}
        ></span>
        <span
          className="m-line"
          style={{
            backgroundColor: darkMode && "white",
            transform: menuOpen && "rotate(135deg) translate(-3px, 3px)",
          }}
        ></span>
      </div>
      <div className="m-text"><span style={{color: darkMode && "white", textShadow:  darkMode && "0 0 7px #0f0f0f"}}>Menu</span></div>
      <div
        className="t"
        style={{ boxShadow: darkMode && "0 0 1rem 0 rgba(243, 243, 243, 0.2)" }}
      >
        <img src={Sun} alt="light mode toggle" className="t-icon" />
        <img src={Moon} alt="dark mode toggle" className="t-icon" />
        <div
          className="t-button"
          onClick={toggleDarkMode}
          style={{ left: darkMode ? 0 : 25 }}
        ></div>
      </div>
      <div className="t-text"><span style={{color: darkMode && "white", textShadow:  darkMode && "0 0 7px #0f0f0f"}}>{darkMode ?"Light":"Dark"} Mode</span></div>
      {/* navigation main body starts*/}
      <nav
        className="m-nav"
        onClick={toggleMenu}
        style={{
          width: menuOpen ? "100%" : "0",
          opacity: menuOpen ? "1" : "0",
          backgroundColor: darkMode && "#222",
        }}
      >
        <ul className="m-list">
          <li
            className="m-list-item"
            // onMouseEnter={() => handleMouseEnter("home")}
            // onMouseLeave={handleMouseLeave}
            // style={{
              // color: darkMode && (isHover && activeLink==="home" ? "black" : "white"),
              // color: darkMode && "white",
              // backgroundImage:
              //   darkMode &&
              //   "linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%)",
            // }}
            style={{color: darkMode && "white"}}
          >
            <AnchorLink href="#intro">Home</AnchorLink>
          </li>
          <li
            className="m-list-item"
            style={{color: darkMode && "white"}}
          >
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li
            className="m-list-item"
            style={{color: darkMode && "white"}}
          >
            <AnchorLink href="#portfolio">Portfolio</AnchorLink>
          </li>
          <li
            className="m-list-item"
            style={{color: darkMode && "white"}}
          >
            <AnchorLink href="#contact-me">Contact</AnchorLink>
          </li>
        </ul>
      </nav>
      {/* navigation main body ends */}
    </>
  );
};

export default Toggle;
