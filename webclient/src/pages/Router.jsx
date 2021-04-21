import { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Details from "./Details/Details";
import Home from "./Home/Home";
import List from "./List/List";

const PagesRouter = () => {
  const { pathname } = useLocation();
  const urlParams = useLocation().search;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, urlParams]);

  return (
    <main>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/list">
          <List />
        </Route>

        <Route path="/details/:propertyId">
          <Details />
        </Route>

        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </main>
  );
};

export default PagesRouter;
