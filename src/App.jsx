import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import CodeReview from './pages/CodeReview';
import SoftwareEngineering from './pages/SoftwareEngineering';
import Algorithms from './pages/Algorithms';
import Database from './pages/Database';
import OriginalCode from './pages/OriginalCode';
import EnhancedCode from './pages/EnhancedCode';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="code-review" element={<CodeReview />} />
          <Route path="software-engineering" element={<SoftwareEngineering />} />
          <Route path="algorithms" element={<Algorithms />} />
          <Route path="database" element={<Database />} />
          <Route path="original-code" element={<OriginalCode />} />
          <Route path="enhanced-code" element={<EnhancedCode />} />
          {/* Catch-all route - prevents blank page on unknown routes */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
