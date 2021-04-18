import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PagesRouter from "./pages/Router";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Header />
      <PagesRouter />
      <Footer />
    </Router>
  );
}

export default App;
