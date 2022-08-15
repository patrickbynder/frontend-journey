import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from '@firebase/firestore';
import styled from 'styled-components';

export function HomePage() {
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [users, setUsers] = useState<any[]>([]);
    const usersCollectionRef = collection(db, 'users');

    const createUser = async () => {
        await addDoc(usersCollectionRef, {
            name: newName,
            age: Number(newAge),
        });
    };

    const updateUser = async (id: string, age: number) => {
        const userDoc = doc(db, 'users', id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
    };

    const deleteUser = async (id: string) => {
        const userDoc = doc(db, 'users', id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <HomePageStyled>
            <input
                placeholder="Name"
                onChange={(event) => {
                    setNewName(event.target.value);
                }}
            />
            <input
                placeholder="Age"
                onChange={(event) => {
                    setNewAge(event.target.value);
                }}
            />
            <button onClick={createUser}> Create User</button>

            {users.map((user) => {
                return (
                    <div>
                        <h2>Name: {user.name}</h2>
                        <p>Age: {user.age}</p>
                        <button
                            onClick={() => {
                                updateUser(user.id, user.age);
                            }}
                        >
                            {' '}
                            increase age
                        </button>

                        <button
                            onClick={() => {
                                deleteUser(user.id);
                            }}
                        >
                            {' '}
                            Delete User
                        </button>
                    </div>
                );
            })}
        </HomePageStyled>
    );
}

const HomePageStyled = styled.div``;
