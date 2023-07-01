import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { useEffect } from "react";
import Aos from "aos";
import ScrollToTop from "./ScrollToTop";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
