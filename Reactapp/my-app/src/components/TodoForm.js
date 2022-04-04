import React from 'react';

const TodoForm = () => {
    const text = '';

    const handleChange = (event) => {
        this.state({
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="text"
                value={text}
                onChange={handleChange}
                placeholder="Todo..."
            />
        </form>
    );
};

export default TodoForm;
