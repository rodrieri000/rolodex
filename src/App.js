import React, { Component } from 'react';
import './App.css';
import ShowMore from './ShowMore';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){

    fetch('https://randomuser.me/api?results=25')
    .then(response => {return response.json();})
    .then(json => {
      this.setState({ 
        users: json.results 
    });
    console.log(this.state.users)
    })
  }
 
  render() {
    return (
      <div className="App">
        <h1>Contact List</h1>   
        <div className="Contacts">
            {this.state.users.map((user, i) => {
            return (
              <div className="Box" key={i}>
                <img className="picture" src={user.picture.large} alt=''></img>
                <h3>{`${user.name.first} ${user.name.last}`}</h3>
                <ShowMore user={user}/>
              </div>
            )
          })}
        </div>        
      </div>
    );
  }
}

export default App;