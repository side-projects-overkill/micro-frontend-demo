import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.scss';

import Header from 'home/Header';
import Footer from 'home/Footer';
import SafeComponent from './SafeComponent';
import PDPContent from './PDPContent';

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header />
      </SafeComponent>
      <div className="my-10">
        <Routes>
          <Route path="/character/:id" element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
