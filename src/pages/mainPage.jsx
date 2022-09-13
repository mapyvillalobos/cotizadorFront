import { LayoutPage } from '../components';
import { Routes, Route } from 'react-router-dom';
import mainroutes from '../config/mainroutes';


const mainPage = () => {
    return (
       <LayoutPage>
            <Routes>
                {mainroutes().map(
                    ({ path, element }, index_route) => (
                        <Route key={path} {...{ path, element }} />
                    )
                )}
            </Routes>
       </LayoutPage>
    )
};

export default mainPage;
