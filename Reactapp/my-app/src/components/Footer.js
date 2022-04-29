import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Footer() {
    const [userData, setUserData] = useState('');

    const getData = () => {
        axios.get('https://randomuser.me/api/').then((response) => {
            console.log(response);
            setUserData(
                response.data.results[0].name.first +
                    ' ' +
                    response.data.results[0].name.last
            );
        });
    };

    return (
        <FooterWrapper>
            made by Patrick Bakker 2022{' '}
            <button onClick={getData}>get Data</button>
            {userData}
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    flex: 1 100%;
    order: 4;
`;

export default Footer;
