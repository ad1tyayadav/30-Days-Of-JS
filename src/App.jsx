// src/App.js

import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollTop from './component/ScrollTop';
import { trackPageView } from './ga';

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
