import { AuthPage, ProfilePage } from '../pages'


const routes = (props) => {

    return [
        {
            path: "/",
            element: <h1>Este es el home</h1>
        },
        {
            path: "/login", 
            element: <AuthPage {...props} />
        },
        {
            path: "/signup", 
            element: <AuthPage {...props} />
        },
        {
            path: "/perfil", 
            element: <ProfilePage {...props} />
        },
        {
            path: "/dashboard",
            element: <ProfilePage {...props} />
        },
        {
            path: "/paquetes", 
            element: <ProfilePage {...props} />
        },
        {
            path: "/cotizaciones", 
            element: <ProfilePage {...props} />
        },
        {
            path: "/catalogo", 
            element: <ProfilePage {...props} />
        },
        {
            path: "/vendedores", 
            element: <ProfilePage {...props} />
        },
        {
            path: "/entidades", 
            element: <ProfilePage {...props} />
        },
    ]

}

export default routes