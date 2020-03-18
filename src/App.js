import React from "react";
import "./App.css";
import ActivityForm from "./Components/ActivtyForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>fit-app</h1>
          <p>get ready to add your fitness schedule for this week</p>
        </header>
        <ActivityForm />

        <footer>all rights reserved © 2020</footer>
      </div>
    );
  }
}

export default App;
