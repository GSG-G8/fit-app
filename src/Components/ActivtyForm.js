import React from "react";
import data from "../resources/data";
class ActivityForm extends React.Component {
  state = {
    activity: "Aerobics",
    day: "Saturday",
    userData: {
      Saturday: ["Walking"],
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wedensday: [],
      Thursday: [],
      Friday: []
    }
  };

  tempUserData = JSON.parse(JSON.stringify(this.state.userData));

  updateActivity = e => {
    this.setState({ activity: e.target.value });
  };

  updateValues = () => {
    this.tempUserData[this.state.day].push(this.state.activity);

    this.setState({ userData: this.tempUserData });
  };

  updateDay = e => {
    this.setState({ day: e.target.value });
  };

  render() {
    return (
      <main>
        <div className="activity">
          <label>
            Day:
            <select id="activity" onChange={this.updateDay}>
              {data.days.map(e => {
                return (
                  <option value={e} key={e}>
                    {e}
                  </option>
                );
              })}
              ;
            </select>
          </label>
          <label>
            Activity Type:
            <select id="activity" onChange={this.updateActivity}>
              {data.activity.map(e => {
                return (
                  <option value={e} key={e}>
                    {e}
                  </option>
                );
              })}
              ;
            </select>
          </label>
          <button onClick={this.updateValues}>add to schedule</button>
        </div>

        <div className="container">
          {data.days.map(e => (
            <ul className={e}>
              {e}
              {this.state.userData[e].map(e => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ))}
        </div>
      </main>
    );
  }
}
export default ActivityForm;
