import Home from '../components/layout/Home';
import Products from '../components/layout/products/Products';
import ProductDetails from '../components/layout/products/ProductDetails';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/produtos",
        component: Products
    },
    {
        path: "/produtos/:gender",
        component: Products
    },
    {
        path: "/produtos/:gender/:category",
        component: Products
    },
    {
        path: "/produtos/:gender/:category/:product/:id",
        component: ProductDetails
    }
];

export default routes