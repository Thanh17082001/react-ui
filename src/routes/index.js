import HomePage from "../pages/HomePage";
import ProductPage from "../pages/Product";

const publicRoutes = [
    {path:'/', component: HomePage},
    {path:'/product', component: ProductPage}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}