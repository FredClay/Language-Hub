import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='MainBody'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
