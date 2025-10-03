import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importar fuentes de Google Fonts
import './fonts.css';

// Componentes principales
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Music from './components/Music';
import RSVP from './components/RSVP';
import FloatingParticles from './components/FloatingParticles';
import AudioPlayer from './components/AudioPlayer';

// Páginas
import ConfirmPage from './pages/ConfirmPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <FloatingParticles />
              <AudioPlayer />
              <Header />
              <main>
                <Hero />
                <EventDetails />
                <DressCode />
                <Gallery />
                <Music />
                <RSVP />
              </main>
            </>
          } />
          <Route path="/confirmar" element={<ConfirmPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
