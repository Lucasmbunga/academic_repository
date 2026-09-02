import { BrowserRouter } from "react-router";
import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </>
  );
}

export default App;
