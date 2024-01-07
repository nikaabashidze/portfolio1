import './App.css';
import {Routes, Route} from 'react-router-dom' ; 
import Skills from './pages/skills/skills'
import Education from './pages/education/education'
import Projects from './pages/projects/projects'
import Contact from './pages/contact/contact'
import HomePage from './pages/homepage/homepage'





function App() {
  return (
    <Routes>
      <Route path="/portfolio1" element={<HomePage />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} /> 
    </Routes>
  );
}

export default App;