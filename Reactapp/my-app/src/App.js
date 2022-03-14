import React, { useState } from 'react';
import images from './images/images.jpg';
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

const Content = () => {
    return (
        <>
            <div>
                <h1>This is the new content area</h1>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                id metus sem. Donec sem mi, porttitor vel purus vestibulum,
                interdum fermentum massa. Donec rutrum in urna et vestibulum. Ut
                sem orci, sollicitudin vitae iaculis in, tincidunt eget orci.
                Nam nec bibendum libero. Fusce aliquam interdum massa, at
                vehicula nunc pellentesque vel. Integer ac ex augue. Suspendisse
                potenti. Mauris at magna at quam placerat congue vel a est. In
                et tortor eget sapien eleifend cursus eget sed est.
            </p>
            <img height="200px" src={images} alt="image" />;
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

            <Content />
        </div>
    );
}

export default App;
