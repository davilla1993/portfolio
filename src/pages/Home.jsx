import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen font-sans text-gray-900">
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
