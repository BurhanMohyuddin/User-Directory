import React, { Component } from 'react';
import Register from './components/Register';
import './App.css';
import 'tachyons';
import './components/style.css'
import Formoutput from './components/Formoutput'

class App extends Component {

  constructor() {
    super();
    // this.users.push({
    //   firstName: 'Burhan'
    // });
    this.state = {
      users: []
    };

    this.state.users.push({
      id: 1,
      firstName: 'Ahmad',
      lastName: 'Hassan',
      age: 21,
      gender: 'M',
      status: 'active',
      email: 'ahmed@gmail.com'
    });

    this.state.users.push({
      id: 2,
      firstName: 'Zain',
      lastName: 'Mohyuddin',
      age: 21,
      gender: 'M',
      status: 'inactive',
      email: 'zain@gmail.com'
    });
  }

  updateUser = (newUser) => {
    var tmp = this.state.users;
    newUser.id = tmp.length + 1;
    tmp.push(newUser);
    this.setState({
      users: tmp
    });


  }
  deleteUser = (id) => {
    console.log('xaxa', id); 
    var tmp = this.state.users;
    var indexOfUserToDelete = tmp.map(user => user.id).indexOf(id);
    tmp.splice(indexOfUserToDelete, 1);
    this.setState({
      users: tmp
    });
  }

  
  render() {

    return (
      <div className="App">
        <div className="text-danger text-center" >
          <h2>User Directory App</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Register addUser={this.updateUser} />
            </div>
            <div className="col">
              <Formoutput users={this.state.users} onDelete={this.deleteUser}/>
            </div>
          </div>
        </div>
      </div>


      // <div className="App">
      // <h2>User Directory App</h2>
      //   <Register/>
      // </div>
    );
  }
}

export default App;
