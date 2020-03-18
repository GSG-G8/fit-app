import React from 'react';
import './App.css';
import ActivityForm from './Components/ActivtyForm';
import DayForm from './Components/DayForm';

class App extends React.Component {
   state={
    day:'Sunday',
    activity:'Walking'
  }


  render(){
    let {day, activity}= this.state
    return (
    <div className="App">
     <header>
       <h1>
       fit-app
       </h1>
       <p>
         get ready to add your fitness schedule for this week
         </p>
         </header>

          <div className="activity">       
            <ActivityForm />
            <DayForm />
            <button>  
              add to schedule
            </button>
            </div> 
         <main>

         </main>
        <footer>
          all rights reserved © 2020
        </footer>
    </div>
    )
};
}

export default App;
