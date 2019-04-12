import Home from '../home';
import firstStep from '../page/firstStep';
import secondStep from '../page/secondStep';

export default [
    {
        path: '/',
        component: Home,
        redirect: '/introduct',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/introduct',
        component: firstStep,
    },
    {
        path: '/about_me',
        component: secondStep,
    },
];
