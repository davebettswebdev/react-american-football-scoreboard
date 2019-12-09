//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionsTeam, homeScore] = useState(0);
  const [tigersTeam, awayScore] = useState(0);
  const [quarter, addQuarter] = useState(1);
  const [down, addDown] = useState(1);
  const [yard, subYard] = useState(10);
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsTeam}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersTeam}</div>
          </div>
        </div>
        <div className="bottomRow">
           <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{down}</div>
          </div>
            <div className="toGo">
              <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">{yard}</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarter}</div>
          </div>
       </div>
      </section>
      <section className="buttons">
        <div className="buttonGroup">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => homeScore(lionsTeam + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => homeScore(lionsTeam + 3)}>Home Field Goal</button>
        </div>
        <div className="buttonGroup">
          <button className="awayButtons__touchdown" onClick={() => awayScore(tigersTeam + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => awayScore(tigersTeam + 3)}>Away Field Goal</button>
        </div>
      </section>
      <section className="buttons">
        <div className="buttonGroup">
          <button className="buttons__down" onClick={() => addDown(down + 1)}>Next Down</button>
          <button className="buttons__down" onClick={() => addDown(down - 3)}>Reset Downs</button>
        </div>
        <div className="buttonGroup">
          <button className="buttons__toGo" onClick={() => subYard(yard - 1)}>Subtract Yard</button>
          <button className="buttons__toGo" onClick={() => subYard(yard + 9)}>Reset Yards</button>
        </div>
      </section>
     
      <section class="buttons">
        <div className="buttonGroup">
          <button className="buttons__quarter" onClick={() => addQuarter(quarter + 1)}>Next Quarter</button>
          <button className="buttons__quarter" onClick={() => addQuarter(quarter - 3)}>Reset Quarters</button>
        </div>
      </section>
    </div>
  );
}

export default App;
