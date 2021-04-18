import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from "./components/Header";
import PagesRouter from "./pages/Router";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home">home</Link>
        <Link to="/page2">page2</Link>
        <Header />
        <PagesRouter />
      </Router>
    </div>
  );
}

export default App;
