import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./auth";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import LandingPage from "./components/pages/LandingPage";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/landing" component={LandingPage} />
    </Switch>
  </Router>
);

export default Routes;
