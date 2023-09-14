import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App tab="home" />);

