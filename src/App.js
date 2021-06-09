import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navigate from "./components/Navigate.jsx";
import Footer from "./components/Footer";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
