/* eslint-disable react/prop-types */

import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="signup" element={<SignUp />} /> */}
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
