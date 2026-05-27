import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from './assets/pages/HomePage'
import ProjectPage from './assets/pages/ProjectPage'
import WorkPage from './assets/pages/WorkPage'
import ContactPage from './assets/pages/ContactPage'
import EducationPage from './assets/pages/EducationPage'
import NavSlider from './components/NavSlider'

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <NavSlider />
    </BrowserRouter>
  );
}