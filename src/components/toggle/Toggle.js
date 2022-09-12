import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
// import { useContext } from "react";
// import { ThemeContext } from "../../context";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/index";

const Toggle = () => {
  // const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  const toggleDarkMode = () => {
    dispatch(uiActions.toggle());
  };

  // const handleClick = () => {
  //   // theme.dispatch({ type: "TOGGLE" });
  //   console.log("change theme");
  // };
  return (
    <>
      <div className="m" style={{ boxShadow: darkMode && "0 0 1rem 0 rgba(243, 243, 243, 0.2)", backgroundColor: "rgba(194, 194, 194, 0.26)"}}>
        {/* <IoMenu style={{color: darkMode && "white", height: "4em"}}/> */}
        <span className="m-line" style={{backgroundColor: darkMode && "white"}}></span>
        <span className="m-line" style={{backgroundColor: darkMode && "white"}}></span>
        <span className="m-line" style={{backgroundColor: darkMode && "white"}}></span>
      </div>
      <div className="t"style={{ boxShadow: darkMode && "0 0 1rem 0 rgba(243, 243, 243, 0.2)"}}>
        <img src={Sun} alt="light mode toggle" className="t-icon" />
        <img src={Moon} alt="dark mode toggle" className="t-icon" />
        <div
          className="t-button"
          onClick={toggleDarkMode}
          style={{ left: darkMode ? 0 : 25 }}
        ></div>
      </div>
    </>
  );
};

export default Toggle;
