import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/views/Home/index';
import UserDetail from '../src/views/UserDetail/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/user-detail/:userId'>
          <UserDetail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
