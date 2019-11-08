import React from 'react';
import './App.css';
import Feed from './containers/Feed';

function App() {

  // componentDidMount(){
  //   fetch()
  //   .then(response => response.json())
  //   .then(posts => console.log(posts))
  // }

  return (
    <div className="App">
      <h1> Cat Iron </h1>
      <Feed 
      />
    </div>
  );
}

export default App;
