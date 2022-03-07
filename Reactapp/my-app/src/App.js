import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const currentPageText = `Your current page is: ${currentPage}`;

    return (
        <>
            <div>{currentPageText}</div>

            <button onClick={() => setCurrentPage('bynderpage')}>
                Click me
            </button>
        </>
    );
};

function App() {
    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
