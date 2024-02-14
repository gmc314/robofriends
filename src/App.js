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
    this.onChange = this.onSearchChange.bind(this);
  }
  onSearchChange (e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox SearchChange={ this.onChange } />
        <CardList robots={ this.state.robots }/>
      </div>
    );
  }
}
/*<input
          className="pa3 ba b--blue bg-lightest-blue"
          type="search" 
          placeholder="Search Robots"
          onChange={this.onSearchChange}
          >
        </input>
        */
export default App;