import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends React.Component{
    constructor() {
        super();
        this.state = {
            loading: true,
            person: [],
        }
    }

    componentDidMount() {
        fetch('https://api.randomuser.me/')
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                this.setState({
                    person: data.results,
                    loading: false,
                });
            });
    }

    shouldComponentUpdate(_nextProps, _nextState) {
        const MAX_AGE = 50;
        if(_nextState.person[0].dob.age > MAX_AGE){
            return false
        }
        return true
    }

    getUserElements(user) {
        return {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            age: user.dob.age,
            image: user.picture.thumbnail,
        }
    }

    render() {
        const { person, loading } = this.state;
        if (loading) return <Loading />;
        return (
            <div>
        {person.map((currentPerson, index) => (
          <PersonCard key={ index } person={ this.getUserElements(currentPerson) } />))}
      </div>
        )
      }
    }

export default PersonDetails