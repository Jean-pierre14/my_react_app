import React from "react";
import Data from "./components/data/Data";
import NewForm from "./components/NewForm";
import "./public/css/style.css";
import Dashboard from "./UI/Dashboard";

const App = () => {
  return (
    <>
      <Dashboard />
      <NewForm />
      <Data />
    </>
  );
};

export default App;
