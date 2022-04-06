import React, { useState } from 'react';

const TodoForm = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    };

    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>
            <input
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <button onClick={onClick}> Add guest </button>
        </div>
    );
};

export default TodoForm;
