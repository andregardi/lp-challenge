import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Page2 from "./Page2/Page2";

const PagesRouter = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/page2">
        <Page2 />
      </Route>

      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
};

export default PagesRouter;
