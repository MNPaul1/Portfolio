import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Layout } from "./components/Layout/Layout";
import "../src/components/design.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout page="home" />} />
          <Route path="/home" element={<Layout page="home" />} />
          <Route path="/skills" element={<Layout page="skills" />} />
          <Route path="/projects" element={<Layout page="projects" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
