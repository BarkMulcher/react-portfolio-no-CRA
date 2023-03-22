import React, { Suspense } from 'react';
// import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Portfolio />
        </Suspense>
    </>
  );
}