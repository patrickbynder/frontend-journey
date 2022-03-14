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
    const [BackgroundColor, setBackgroundColor] = useState('Blue');
    const [ButtonBackgroundColor, setButtonBackgroundColor] = useState('White');
    const [ButtonTextColor, setButtonColor] = useState('Black');

    return (
        <div style={{ background: BackgroundColor }} className="App">
            <Header />
            <button
                style={{
                    background: ButtonBackgroundColor,
                    color: ButtonTextColor,
                }}
                onClick={() => setBackgroundColor('Red')}
            >
                Click Button red
            </button>
            <button
                style={{
                    background: ButtonBackgroundColor,
                    color: ButtonTextColor,
                }}
                onMouseEnter={() => setBackgroundColor('Green')}
            >
                Hover Button Green
            </button>

            <button
                style={{
                    background: ButtonBackgroundColor,
                    color: ButtonTextColor,
                }}
                onClick={() => {
                    setButtonBackgroundColor('Black');
                    setButtonColor('White');
                }}
            >
                Change buttons to dark
            </button>
        </div>
    );
}

export default App;
