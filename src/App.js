import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./components/robots";
 
class App extends Component  {
  constructor() {
  super();
    this.state  = {
      robots: robots,
      searchfield: ""
    };
  }
  onSearchChange (e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange } />
        <CardList robots={ this.state.robots }/>
      </div>
    );
  }
}

export default App;