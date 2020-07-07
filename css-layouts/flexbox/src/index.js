import React from "react";
import ReactDOM from "react-dom";
import {
  withRouter,
  BrowserRouter,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import {
  Block
} from './grid-components';
import {
  ExerciseOne
} from './exercise/exercise1/index';


const Start = () => {
  <div style={{border: '10px solid purple'}}>
    <p>This will become the landing page</p>
  </div>
}

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavLink
            activeClassName="PageHeader-navButton--isActive"
            className="PageHeader-navButton"
            to="/start"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            activeClassName="PageHeader-navButton--isActive"
            className="PageHeader-navButton"
            to="/exercise1"
          >
            <span>Exercise 1</span>
          </NavLink>
          <Switch>
            <Route exact path="/start" component={Start} />
            <Route exact path="/exercise1" component={ExerciseOne} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);