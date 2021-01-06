import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicPage from '../pages/PublicPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PublicPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
