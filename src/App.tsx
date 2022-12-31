import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cources from './pages/Cources';
import Media from './pages/Media';
import Cirtificate from './pages/Cirtificate';
import Donate from './pages/Donate';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/course" element={<Cources />} />
          <Route path="/media" element={<Media />} />
          <Route path="/cirtificate" element={<Cirtificate />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;



// <Route path='/' element={<Home />} />
// <Route path='About' element={<About />} />
// <Route path='Cources' element={<Cources />}/>
// <Route path='Cources' element={<Cources />}/>
// <Route path='Media' element={<Media />}/>