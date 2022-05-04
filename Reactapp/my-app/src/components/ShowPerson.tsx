import React from 'react';
import styled from 'styled-components';

import { Person } from '../types';

interface ShowPersonProps {
    person: Person;
}

const ShowPerson = ({ person }: ShowPersonProps) => {
    return (
        <PersonBox>
            <PersonTitle>{person.name.title}</PersonTitle>

            <PersonImage src={person.picture.large} />
            <PersonNaming>
                {person.name.first} - {person.name.last}
            </PersonNaming>
        </PersonBox>
    );
};

export default ShowPerson;

const PersonBox = styled.div`
    margin-bottom: 10px;
`;

const PersonTitle = styled.div`
    font-size: 24px;
    color: #000;
    text-align: center;
`;

const PersonNaming = styled.div`
    font-size: 18px;
    color: #ccc;
`;

const PersonImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 6px;
`;
