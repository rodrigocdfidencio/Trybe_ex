import React from 'react';

class PersonCard extends React.Component {
    render(){
        const { person: { name, email, age, image }} = this.props;
        return(
            <div>
                <p>{ name }</p>
                <p>{ email }</p>
                <p>{ age }</p>
                <p>{ image }</p>
            </div>
        )
    }
}

export default PersonCard;