import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'

class App extends Component {


  state = {
    persons: [
      {name: 'Matt'},
      {name: 'Kayla'},
    ]
  };

  nameChangeHandler = (e) => {
    this.setState( {
      persons: [
        {name: e.target.value},
        {name: 'Kayla'},
    ]
    } )
  }

  render() {
    
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      marginTop: '100px',
      padding: '8px'
    }
    
    return (
      <div className="App">

        <UserInput 
          update={this.nameChangeHandler} 
          style={style} 
        />

        <UserOutput username={this.state.persons[0].name} />
        <UserOutput username={this.state.persons[1].name} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
