import React from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./components/robots";

const App = () => {
  return (
    <>
    <h1>RoboFriends</h1>
    <SearchBox />
    <CardList robots={ robots }/>
    </>
  );
}

export default App;