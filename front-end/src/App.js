import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import LandingPage from './components/pages/LandingPage';
import QuickVerbPage from './components/pages/QuickVerbPage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='MainBody'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/aboutUs' element={<AboutPage />} />
            <Route path='/quickVerb' element={<QuickVerbPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
