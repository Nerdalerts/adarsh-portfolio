import React from 'react';
import Portfolio from '../components/Portfolio';
import './styles/main.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Adarsh's Portfolio</h1>
                <p>Student at DTU, Batch of 2027</p>
            </header>
            <main>
                <Portfolio />
            </main>
            <footer className="home-footer">
                <p>© 2023 Adarsh. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;