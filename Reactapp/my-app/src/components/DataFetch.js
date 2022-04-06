import React, { useEffect, useState } from 'react';

const DataFetch = () => {
    const [loading, setIsLoading] = useState(true);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const url = 'https://api.randomuser.me/?results=5';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPeople(data.results));

        setIsLoading(false);
    }, []);

    return (
        <div>
            {loading || people.length === 0 ? (
                <div>Loading... </div>
            ) : (
                <div>
                    {people
                        .sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
                        .map((person) => (
                            <div key={person.login.uuid}>
                                <div>{person.name.title}</div>
                                <div>{person.name.first}</div>
                                <div>{person.name.last}</div>
                                <img src={person.picture.large} />
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default DataFetch;
