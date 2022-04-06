import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from './StyledButton';

const Sidebar = ({ children }) => {
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [result, setResult] = useState(0);
    // const outcomeSum = (e) => {
    //     e.preventDefault();
    //     const showOutcome = firstNumber * secondNumber;
    //     console.log(showOutcome);
    // };

    const handleOnSubmit = () => {
        setResult(firstNumber * secondNumber);
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
                type="number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />
            <input
                required
                placeholder="Number two"
                type="number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />
            <StyledButton onClick={handleOnSubmit}>
                Make this calcuation
            </StyledButton>

            <p>this is the outcome {result}</p>

            <p>Array data:</p>
            {mockData.map((item, index) => (
                <dataObject key={index} data={item}>
                    <NameHolder>{item.name}</NameHolder>

                    {item.pet}
                </dataObject>
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
