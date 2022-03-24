import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Content = () => {
    return (
        <>
            <TextField
                id="Input"
                label="Name your Net Revenue"
                type="Input name"
            />

            <TextField
                required
                id="Number-in-millions"
                label="Add Amount in Millions"
                type="Input Number"
            />
        </>
    );
};

export default Content;
