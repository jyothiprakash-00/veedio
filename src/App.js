import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LandinPages from './pages/LandinPages';
import WatchHistory from './pages/WatchHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div >
    <Header/>
    <Routes>
      <Route path='/'element={<LandinPages/>}/>
      <Route path='/home'element={  <HomePage/>}/>
      <Route path='/watch-history'element={<WatchHistory/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
