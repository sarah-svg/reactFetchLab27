import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ListCharacters from '../home/ListOfCharacters';
import DetailsPage from '../details/DetailsPage';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={ListCharacters} 
          />
          <Route
            path="/detail/:name"
            component={DetailsPage}
          />
        </Switch>
      </Router>
    </div>
  );
}
