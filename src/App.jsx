import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import FloatingParticles from '@/components/FloatingParticles';
import Home from '@/pages/Home';
import AlbumPage from '@/pages/AlbumPage';
import AlbumView from '@/pages/AlbumView';
import MusicPage from '@/pages/MusicPage';
import ConfirmPage from '@/pages/ConfirmPage';
import AudioPlayer from "./components/AudioPlayer";

function App() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll)); // 0 → 1
      const percent = ratio * 100;
      document.documentElement.style.setProperty('--scroll', String(ratio));      // 0..1
      document.documentElement.style.setProperty('--scroll-y', String(percent));  // 0..100
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fondo con imagen nítida + parallax suave */}
      <div className="bg-parallax" aria-hidden="true">
        <img src="/bg-bottom.jpg" alt="" className="bg-parallax__img" decoding="async" fetchpriority="high" />
      </div>

      <FloatingParticles />
      <AudioPlayer src="/maxi-trusso.mp3" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/album-view" element={<AlbumView />} />
          <Route path="/musica" element={<MusicPage />} />
          <Route path="/confirmar" element={<ConfirmPage />} />
        </Routes>
      </AnimatePresence>

      {/* 👇 Toaster abajo al centro */}
      <Toaster
  position="bottom-center"
  toastOptions={{
    className: "bg-[#1a0007]/90 border border-[#800000] text-white rounded-xl shadow-lg backdrop-blur-md"
  }}
/>

    </>
  );
}

export default App;
