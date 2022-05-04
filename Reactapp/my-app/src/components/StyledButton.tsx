import styled from 'styled-components';

interface StyledButtonProps {
    isDarkModeEnabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    padding: 10px;
    background-color: ${(props) => (props.isDarkModeEnabled ? `#000` : '#fff')};
    color: ${(props) => (props.isDarkModeEnabled ? `#fff` : '#000')};
`;
