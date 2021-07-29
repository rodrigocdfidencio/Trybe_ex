import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleButtonOne() {
    this.setState((event) => ({
      clicksBtnOne: event.clicksBtnOne +1,
    }));
  }
  
  handleButtonTwo() {
    this.setState((event) => ({
      clicksBtnTwo: event.clicksBtnTwo +1,
    }));
  }
  
  handleButtonThree() {
    this.setState((event) => ({
      clicksBtnThree: event.clicksBtnThree +1,
    }));
  }
 
   render() {
    return (
      <div>
        <button onClick={ this.handleButtonOne }>{ this.state.clicksBtnOne }</button>
        <button onClick={ this.handleButtonTwo }>{ this.state.clicksBtnTwo }</button>
        <button onClick={ this.handleButtonThree }>{ this.state.clicksBtnThree }</button>
      </div>
    );
  }
}

export default App;