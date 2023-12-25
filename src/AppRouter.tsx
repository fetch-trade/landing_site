import { Routes, Route } from 'react-router-dom';
import Features from './pages/Features';
import About from './pages/About';
import UseCases from './pages/UseCases';
import Home from './pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/use_cases" element={<UseCases />} />
    </Routes>
  )
}
