// src/App.js
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import ScrollTop from './component/ScrollTop';
import { Analytics } from "@vercel/analytics/react"

function App() {


  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
