import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import List from '../Home/List';
import Detail from '../Details/Detail';


export default function App() {
  return (
    <div >
      <Router>
      
        <Switch>
          <Route
            path="/"
            exact
            component={List} 
          />
          <Route
            path="/detail/:name"
            component={Detail}
          />
        </Switch>
      </Router>
    </div>
    
  );
}
