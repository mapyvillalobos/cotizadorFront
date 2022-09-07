import { useState, useEffect } from "react";
import "./App.css";

import routes from "./config/routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { LayoutPage } from "./components";

function App() {
  return (
    <div className="App">
      <LayoutPage>

      </LayoutPage>
    </div>
  );
}

export default App;
