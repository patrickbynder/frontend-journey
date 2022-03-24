import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

const Header = ({ ToggleDarkMode, isDarkModeEnabled }) => {
    const [currentPage, setCurrentPage] = useState('Home');
    const currentPageText = `Your current page is: ${currentPage}`;

    return (
        <HeaderWrapper>
            <div>{currentPageText}</div>

            <StyledButton
                onClick={ToggleDarkMode}
                isDarkModeEnabled={isDarkModeEnabled}
            >
                Change to {isDarkModeEnabled ? 'Light' : 'Dark'} Mode
                {/* Change to {isDarkModeEnabled ? 'Light' : 'Dark'} Mode */}
            </StyledButton>
        </HeaderWrapper>
    );
};

export const HeaderWrapper = styled.div`
    flex: 1 100%;
`;

export default Header;
