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
const [isLoading, setIsLoading] = useState(true)
    function authentication(user) {
      console.log("user", user);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user))
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
                localStorage.removeItem("user")
              } else {
                alert(errorMessage);
              }
            });
          },
        });
      }
    

useEffect(() => {
  const userLocal = localStorage.getItem("user")
  if (userLocal){
    setUser(JSON.parse(userLocal))
    setIsLoading(false)
  } else {setIsLoading(false)}
}, []);

if (isLoading){
  return (<div>Estoy cargando</div>)
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
