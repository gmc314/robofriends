import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'; 

function App() {
  // constructor() {
  // super();
  const [ robots, setRobots ] = useState([]);
  const [ searchfield, setSearchfield ] = useState("");
    // this.state  = {
    //   robots: [],
    //   searchfield: ""
    // };

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({robots: users}));
  // }
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)});
  },[])
  
  const onSearchChange = (e) => {
    setSearchfield(e.target.value)
 }

  const filteredRobots = robots.filter(bot => {
    return bot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
  return !robots.length ? 
  <h1>Loading</h1>  
  : (
    <div className="tc">
      <h1 className="f1">Robots</h1>
      <SearchBox searchChange={ onSearchChange } />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={ filteredRobots }/>
        </ErrorBoundary>
      </Scroll>             
    </div>
  );
}
export default App;