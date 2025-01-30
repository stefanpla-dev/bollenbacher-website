import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CV from './pages/CV';
import LivePerformances from './pages/LivePerformances';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="cv" element={<CV />} />
          <Route path="live-performances" element={<LivePerformances />}/>        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
