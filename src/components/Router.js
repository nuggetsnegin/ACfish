import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  <BrowserRouter>
    <Switch>
      {/* tries the first route and uses fallbacks if not found*/}
      <Route>
        {/*what path - in this context its abs of / and renders out component storepicker*/}
        <Route exact path="/" component={StorePicker} />
      </Route>
    </Switch>
  </BrowserRouter>;
};
