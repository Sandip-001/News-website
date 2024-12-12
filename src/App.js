import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar"; 

const App = () => {

  const loadingBarRef = useRef(null); // Create a reference to the loading bar

  // Function to start and stop the loading bar
  const setProgress = (progress) => {
    loadingBarRef.current.continuousStart(); // Start the loading
    loadingBarRef.current.complete(); // Stop it after some time
  };

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" style={{height: '5px'}} ref={loadingBarRef} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" setProgress={setProgress} category="general" />} />
          <Route exact path="/business" element={<News key="business" setProgress={setProgress} category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} category="entertainment" />} />
          <Route exact path="/health" element={<News key="health" setProgress={setProgress} category="health" />} />
          <Route exact path="/science" element={<News key="science" setProgress={setProgress} category="science" />} />
          <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" setProgress={setProgress} category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

