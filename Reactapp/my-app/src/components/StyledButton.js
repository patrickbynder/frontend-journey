import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px;
    background-color: ${(props) => (props.isDarkModeEnabled ? `#000` : '#fff')};
    color: ${(props) => (props.isDarkModeEnabled ? `#fff` : '#000')};
`;
