import { CssBaseline } from '@mui/material';
import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Switch>
          <Route exact path="/movie/:id">
            <h1>Movie Information</h1>
          </Route>
          <Route exact path="/actor/:id">
            <h1>Actors</h1>
          </Route>
          <Route exact path="/">
            <h1>Movies</h1>
          </Route>
          <Route exact path="/profile/:id">
            <h1>Profile</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
