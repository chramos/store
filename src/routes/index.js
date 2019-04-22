import Home from '../components/layout/Home';
import Products from '../components/layout/products/Products';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/produtos/:gender",
        component: Products
    },
    {
        path: "/produtos/:gender/:category",
        component: Products
    }
];

export default routes