import React from "react";
import "./App.css";
import { HomeComponent } from "./components";
import { DataProvider } from "./context";

function App() {
  return (
    <DataProvider>
      <HomeComponent />
    </DataProvider>
  );
}

export default App;
