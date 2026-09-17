import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Documents, Home, LoginForm,RegisterForm, SavedDocuments } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/login" element={ <LoginForm />}/>
          <Route path="/sign-up" element={ <RegisterForm />}/>
          <Route path="/documents" element={ <Documents />}/>
          <Route path="/saved" element={ <SavedDocuments />}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
