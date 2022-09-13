import { PackageCatalog, Quotes, CatalogueProducts, EntityCards, ProfilePage } from '../pages'; 

const mainroutes = (props) => {

    return [
        {
            path: "/dashboard",
            element: <h1>Dashboard</h1>
        },
        {
            path: "/paquetes",
            element: <PackageCatalog/>
        },
        {
            path: "/cotizaciones",
            element: <Quotes/>
        },
        {
            path: "/catalogo",
            element: <CatalogueProducts/>
        },
        {
            path: "/vendedores",
            element: <h1>Vendedores</h1>
        },
        {
            path: "/entidades",
            element: <EntityCards/>
        },
        {
            path: "/mi-perfil",
            element: <ProfilePage/>
        },
        {
            path: "/logout",
            element: <h1>Logout</h1>
        }
    ]

}



export default mainroutes