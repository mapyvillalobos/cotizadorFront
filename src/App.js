import { useState, useEffect } from "react";
import "./App.css";

import routes from "./config/routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { logoutWs } from "./services/auth-ws";
import UserForm from "./components/UserForm";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

    function authentication(user) {
      console.log("user", user);
      setUser(user);
    }

      function handleLogout() {
        Modal.confirm({
          title: "Cerrar sesión",
          content: "Estás seguro que deseas cerar sesión?",
          onOk() {
            logoutWs().then((res) => {
              const { data, status, errorMessage } = res;
              if (status) {
                Modal.success({
                  content: data.successMessage,
                });
                navigate("/");
                setUser(null);
              } else {
                alert(errorMessage);
              }
            });
          },
        });
      }
    
return (
  <div className="App">
    <Routes>
      {routes({ user, handleLogout, authentication }).map(
        ({ path, element }, index_route) => (
          <Route key={path} {...{ path, element }} />
        )
      )}
    </Routes>
  </div>
);
}


export default App;
