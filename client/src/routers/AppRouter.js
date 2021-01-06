import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import ModeratorPage from '../pages/ModeratorPage';
import PublicPage from '../pages/PublicPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PublicPage} exact />
        <Route path="/admin" component={AdminPage} />
        <Route path="/moderator" component={ModeratorPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
