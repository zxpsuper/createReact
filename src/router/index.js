import Home from '@/home';
import Introduct from '@/page/Introduct';
import AboutMe from '@/page/AboutMe';
import ReactHook from '@/page/ReactHook';

export default [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/introduct',
        component: Introduct,
    },
    {
        path: '/about_me',
        component: AboutMe,
    },
    {
        path: '/react_hook',
        component: ReactHook,
    },
];
