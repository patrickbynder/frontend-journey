import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    const [firstName, setFirstName] = useState<string | undefined>();
    const [lastName, setLastName] = useState<string | undefined>();
    const [result, setResult] = useState<string | undefined>();

    const handleOnSubmit = () => {
        if (firstName && lastName) {
            setResult(firstName + lastName);
        }
    };

    const mockData = [
        { name: 'Patrick', pet: 'dog' },
        { name: 'Brian', pet: 'cat' },
    ];

    return (
        <SidebarWrapper>
            <h2>{children}</h2>
            <input
                required
                placeholder="Number one"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                required
                placeholder="Number two"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <StyledButton onClick={handleOnSubmit}>
                Make this calcuation
            </StyledButton>

            <p>this is the outcome {result}</p>

            <p>Array data:</p>
            {mockData.map((item, index) => (
                <span key={index}>
                    <NameHolder>{item.name}</NameHolder>
                    {item.pet}
                </span>
            ))}
        </SidebarWrapper>
    );
};

export const SidebarWrapper = styled.div`
    flex: 1 auto;
`;

const NameHolder = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

export default Sidebar;
