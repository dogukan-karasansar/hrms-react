import { Container } from "semantic-ui-react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navigate from "./components/Navigate.jsx";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
