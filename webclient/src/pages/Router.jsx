import { Switch, Route, Redirect } from "react-router-dom";
import Details from "./Details/Details";
import Home from "./Home/Home";
import List from "./List/List";

const PagesRouter = () => {
  return (
    <main>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path={["/list/page/:page", "/search/:searchParam/page/:page"]}>
          <List />
        </Route>

        <Route path="/details/:propertyId">
          <Details />
        </Route>

        <Route path="/list">
          <Redirect to="/list/page/1" />
        </Route>

        <Route path="/search/:searchParam">
          <Redirect
            from="/search/:searchParam"
            to="/search/:searchParam/page/1"
          />
        </Route>

        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </main>
  );
};

export default PagesRouter;
