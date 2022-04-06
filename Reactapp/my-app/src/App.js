import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { StyledButton } from './components/StyledButton';
import DataFetch from './components/DataFetch';
import TodoList from './components/TodoList';

function App() {
    const [sidebarEnabled, setisSidebarEnabled] = useState(false);
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    const ToggleSidebar = () => {
        setisSidebarEnabled(!sidebarEnabled);
    };

    const ToggleDarkMode = () => {
        setIsDarkModeEnabled(!isDarkModeEnabled);
    };

    return (
        <Wrapper isDarkModeEnabled={isDarkModeEnabled}>
            <Header
                ToggleDarkMode={ToggleDarkMode}
                isDarkModeEnabled={isDarkModeEnabled}
            ></Header>
            {sidebarEnabled && <Sidebar>This is a calculator</Sidebar>}

            <StyledButton onClick={ToggleSidebar}>Sidebar Button</StyledButton>
            <Content />
            <DataFetch />
            <Footer />
            <TodoList />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;

    flex-flow: row wrap;
    margin: auto;
    gap: 24px 12px;
    max-width: 1280px;
    background-color: ${(props) => (props.isDarkModeEnabled ? `#000` : '#fff')};
    color: ${(props) => (props.isDarkModeEnabled ? `#fff` : '#000')};

    & > * {
        padding: 12px;
    }
`;

export default App;
