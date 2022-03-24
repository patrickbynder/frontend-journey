import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function Title() {
    const [currentBlockTitle, setcurrentBlockTitle] = useState('Default text');

    const changeEditMode = (e) => {
        console.log('this is a test');
    };

    return <div onDoubleClick={changeEditMode}>{currentBlockTitle}</div>;
}
