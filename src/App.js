import React, { Suspense } from 'react';
// import "./styles/style.css";
import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import About from '../src/components/pages/About';
// import Portfolio from '../src/components/pages/Portfolio';
import Contact from '../src/components/pages/Contact';
import Loading from '../src/components/LoadingPage';
const Portfolio = React.lazy(() => import('./components/pages/Portfolio'));

export default function App() {
  return (
    <>
      <Loading />
      <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
        <Portfolio />
      </Suspense>
    </>
  );
}