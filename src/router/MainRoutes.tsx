
import { lazy } from 'react';
import Loadable from '../component/loader/Loadable';
import MainLayout from '../layout/MainLayout';
// import Loadable from '../components/loader/Loadable';
// project import
// import MainLayout from '../layout/MainLayout';



// render - dashboard

const Main = Loadable(lazy(() => import('../pages/main')));
// const Ginny = Loadable(lazy(() => import('@pages/ginny')));
// const Soo = Loadable(lazy(() => import('@pages/soo')));
// const JB = Loadable(lazy(() => import('@pages/jb')));
// const Ariel = Loadable(lazy(() => import('@pages/ariel')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [

        {
            path: 'main',
            element: <Main />,
         }
        ]
};

export default MainRoutes;

