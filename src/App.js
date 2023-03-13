import React from 'react';
// import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Contact';
import Contact from './components/pages/Contact';



export default function App() {
    return(
        <Router>
            <div className='flex-column justify-flex-start min-100-vh'>
                <header>
                    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                        <Header />
                    </nav>
                </header>
            </div>
        </Router>
    );
}