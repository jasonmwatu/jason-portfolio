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
      <div className="m">
        {/* <IoMenu style={{color: darkMode && "white", height: "4em"}}/> */}
        <span className="m-line" style={{backgroundColor: darkMode && "white"}}></span>
        <span className="m-line" style={{backgroundColor: darkMode && "white"}}></span>
        <span className="m-line" style={{backgroundColor: darkMode && "white"}}></span>
      </div>
      <div className="t">
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
