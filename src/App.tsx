
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './com/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
