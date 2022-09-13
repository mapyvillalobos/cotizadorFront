import { PackageCatalog, Quotes, CatalogueProducts, EntityCards, ProfilePage, AllUsers } from '../pages'; 

const mainroutes = (props) => {

    return [
        {
            path: "/dashboard",
            element: <h1>Dashboard</h1>
        },
        {
            path: "/paquetes",
            element: <PackageCatalog {...props}/>
        },
        {
            path: "/cotizaciones",
            element: <Quotes {...props} />
        },
        {
            path: "/catalogo",
            element: <CatalogueProducts {...props} />
        },
        {
            path: "/vendedores",
            element: <AllUsers {...props} />
        },
        {
            path: "/entidades",
            element: <EntityCards {...props} />
        },
        {
            path: "/mi-perfil",
            element: <ProfilePage {...props} />
        }
       
    ]

}



export default mainroutes