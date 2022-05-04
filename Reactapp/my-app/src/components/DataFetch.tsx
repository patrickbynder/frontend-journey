import React, { useEffect, useState } from 'react';

import { API } from '../helpers/api';
import ShowPerson from './ShowPerson';
import { Person } from '../types';

const DataFetch = () => {
    const [loading, setIsLoading] = useState(true);
    const [people, setPeople] = useState<any[]>([]);

    useEffect(() => {
        API.fetchUsers()
            .then((data) => {
                setPeople(data.results);
            })
            .catch((errorMessage) => console.log('ERROR: ', errorMessage))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            {loading || people.length === 0 ? (
                <div>Loading... </div>
            ) : (
                <div>
                    {people
                        .sort((a, b) => (a.name.first > b.name.first ? 1 : -1))
                        .map((person: Person) => (
                            <ShowPerson
                                key={person.login.uuid}
                                person={person}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default DataFetch;
