import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* tries the first route and uses fallbacks if not found*/}
      {/*what path - in this context its abs of / and renders out component storepicker*/}
      <Route exact path="/" component={StorePicker} />
      {/*catch all for any store name*/}
      <Route path="/store/:storeId" component={App} />
      {/*catch all fallback*/}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
