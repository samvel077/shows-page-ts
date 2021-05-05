import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShowsPage from "./components/ShowsPage/ShowsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowPage from "./components/ShowPage/ShowPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ShowsPage} />
      <Route path="/shows" exact component={ShowsPage} />
      <Route path="/shows/:id" exact component={ShowPage} />
    </Switch>
  );
}

export default App;
