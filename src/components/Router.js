import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import StorePicker from './StorePicker';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* tries the first route and uses fallbacks if not found*/}
      {/*what path - in this context its abs of / and renders out component storepicker*/}
      <Route exact path="/" component={StorePicker} />
    </Switch>
  </BrowserRouter>
);

export default Router;
