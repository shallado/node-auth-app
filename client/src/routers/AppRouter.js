import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicPage from '../pages/PublicPage';
import SignInPage from '../pages/SignInPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PublicPage} exact />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
