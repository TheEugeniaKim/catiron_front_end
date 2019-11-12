import React from 'react';
import './App.css';
import MeowContainer from './containers/MeowContainer';
import Welcome from './components/Welcome';

class App extends React.Component{

  //State will hold information about whether or not user is logged in
  //If user is not logged in => loggedIn will point to 'false'
  //Username will be held in App state so that it can be passed
  //to the MeowContainer when the user logs in successfully 


  state={
    loggedIn: false,
    
    username: null,
    newUser: null, 
    catId: null
  }

//Login functionality passed down to Login form as a prop
  login = (username) => {
    return fetch('http://localhost:3000/cats')
    .then(response => response.json())
    .then(cats => {
      let cat = cats.find(cat => cat.username === username)
      this.setState({
        loggedIn: true, 
        catId: cat.id,
        username: cat.username
      })
    })     
  }
  // old login functionality before we got the backend this.setState({loggedIn: true, username: username})

//Logout functionality passed down to MeowContainer as a prop
  logout = () => {
    this.setState({loggedIn: false, username: ''})
  }

  signUp = (newUserObj) => {
    this.setState({newUser: newUserObj})
  }

//   getCatIdByUsername = (username) => {
//     return fetch('http://localhost:3000/cats')
//     .then(response => response.json())
//     .then(cats => {
//         let cat = cats.find(cat => cat.username === username)
//         this.setState({
//           loggedIn: true, 
//           catId: cat.id,
//           username: cat.username
//         })
//     })     
// }

  //Need button on landing page to pull up sign up form
  //Button will only render if logged in is false
  //Sign up form will create new user - new user name will be used to login new user

  render(){
    return (
      <div> 
          {this.state.loggedIn ? <MeowContainer logout={this.logout} username={this.state.username} catId={this.state.catId}  /> : <Welcome login={this.login}/>}
      </div>
    );
  }
}

export default App;

