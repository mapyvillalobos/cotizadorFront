import { useState, useEffect } from "react";
import "./App.css";

import routes from "./config/routes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { logoutWs } from "./services/auth-ws";
import { LayoutPage, PackageForm, TableQuotes, QuoteForm } from "./components";
import {EntityCards, LogInPage, packageCatalog, packageCreate, ProfilePage, QuoteCreate, Quotes} from "./pages"
import PackageCatalog from "./pages/packageCatalog";
import CatalogueProducts from "./pages/catalogueProducts";
import AllUsers from "./pages/users";
import EntityCreate from "./pages/entityCreate";

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
            //ejecutar el endpoint para hacer logout y borrar el usuario del state
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

{/* <EntityCards>

</EntityCards> */}

{/* <LogInPage>

</LogInPage> */}

{/* <PackageCatalog>

</PackageCatalog> */}

{/* <packageCreate>

</packageCreate> */}

{/* <PackageForm>

</PackageForm> */}

{/* <CatalogueProducts>

</CatalogueProducts> */}
{/* <AllUsers>

</AllUsers> */}

{/* <ProfilePage>

</ProfilePage> */}

{/* <Quotes>

</Quotes> */}
{/* 
<QuoteCreate>

</QuoteCreate> */}

{/* <EntityCreate>

</EntityCreate> */}


  </div>
);
}


export default App;
