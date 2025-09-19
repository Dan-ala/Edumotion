import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Testimonies from "./pages/testimonies/Testimonies.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<Courses />} />
      <Route path="/testimonios" element={<Testimonies />} />
      <Route path="/contacto" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
