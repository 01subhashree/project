import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./componets/homePage/HomePage";
import FormPage from "./componets/formPage/FormPage";
import PageNotFound from "./componets/errorPage/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/form"} element={<FormPage />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
