import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from '@components/ScrollToTop';

import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import Error from '@/pages/Error';

import '@/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);
