import Home from '../components/layout/Home';
import Products from '../components/layout/products/Products';
import ProductDetails from '../components/layout/products/ProductDetails';
import Cart from '../components/layout/cart/Cart';

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
    },
    {
        path: "/carrinho",
        component: Cart
    }
];

export default routes