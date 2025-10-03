
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import EventDetails from '@/components/EventDetails';
import PhotoGallery from '@/components/PhotoGallery';
import MusicSection from '@/components/MusicSection';
import DressCode from '@/components/DressCode';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';
import { EVENT_CONFIG, SEO_CONFIG } from '@/config/eventConfig';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{SEO_CONFIG.title}</title>
        <meta name="description" content={SEO_CONFIG.description} />
        <meta property="og:title" content={SEO_CONFIG.title} />
        <meta property="og:description" content={SEO_CONFIG.description} />
        <meta property="og:image" content={SEO_CONFIG.ogImage} />
        <meta name="keywords" content={SEO_CONFIG.keywords.join(', ')} />
      </Helmet>
      
      <div className="min-h-screen relative">
        <HeroSection />
        <CountdownSection />
        <EventDetails />
        <PhotoGallery />
        <MusicSection />
        <DressCode />
        <RSVP />
        <Footer />
      </div>
    </>
  );
};

export default Home;
