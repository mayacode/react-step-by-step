import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Books from '../Books/Books';
import UserAccount from '../UserAccount/UserAccount';

// export clean component for test use
export function App() {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <BrowserRouter>
        <Switch>
          <Route path="/:subpage?">
            <Header />
            <Route path="/" exact><h1>Hello world!</h1></Route>
            <Route path="/about">About</Route>
            <Route path="/contact">Contact</Route>
            <Route path="/books"><Books /></Route>
            <Route path="/account"><UserAccount /></Route>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.displayName = 'App';
App.propTypes = {};

export default App;
