import { LogInPage, MainPage } from '../pages';



const routes = (props) => {

    return [
        {
            path: "/",
            element: <LogInPage {...props} />
        },
        {
            path: "/main/*",
            element: <MainPage {...props}/>
        },
        // {
        //     path: "/login", 
        //     element: <AuthPage {...props} />
        // },
        // {
        //     path: "/signup", 
        //     element: <AuthPage {...props} />
        // },
        // {
        //     path: "/perfil", 
        //     element: <ProfilePage {...props} />
        // },
        // {
        //     path: "/dashboard",
        //     element: <ProfilePage {...props} />
        // },
        // {
        //     path: "/paquetes", 
        //     element: <ProfilePage {...props} />
        // },
        // {
        //     path: "/cotizaciones", 
        //     element: <ProfilePage {...props} />
        // },
        // {
        //     path: "/catalogo", 
        //     element: <ProfilePage {...props} />
        // },
        // {
        //     path: "/vendedores", 
        //     element: <ProfilePage {...props} />
        // },
        // {
        //     path: "/entidades", 
        //     element: <ProfilePage {...props} />
        // },
    ]

}



export default routes