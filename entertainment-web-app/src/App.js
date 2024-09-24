import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Home from './components/Home';
import Movies from './components/Movies';
import TVSeries from './components/TVSeries';
import Bookmarked from './components/Bookmarked';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Login />  */}
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<TVSeries />} />
        <Route path='/bookmarked' element={<Bookmarked />} />
      </Routes>
    </Router>
  );
}

export default App;
