import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicPage from '../pages/PublicPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PublicPage} exact />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
