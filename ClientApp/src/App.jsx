import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import StudyMaterials from "./pages/StudyMaterials";
import ExamGuide from "./pages/ExamGuide";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/hsk" element={<StudyMaterials />} />
      <Route path="/hsk/:skill" element={<ExamGuide />} />
    </Routes>
  );
}

export default App;
