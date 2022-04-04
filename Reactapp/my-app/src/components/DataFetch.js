import React from 'react';

export default class DataFetch extends React.Component {
    state = {
        loading: true,
        people: [],
    };

    async componentDidMount() {
        const url = 'https://api.randomuser.me/?results=5';
        const response = await fetch(url);
        const data = await response.json();

        this.setState({ people: data.results, loading: false });
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.people ? (
                    <div>Loading... </div>
                ) : (
                    <div>
                        {this.state.people
                            .sort((a, b) =>
                                a.name.first > b.name.first ? 1 : -1
                            )
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
    }
}
