// import { useContext } from "react";
import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
// import { ThemeContext } from "./context";

import { useSelector } from "react-redux";

const App = () => {
  const darkMode = useSelector((state) => state.ui.darkMode);
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  // const darkMode = false;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
