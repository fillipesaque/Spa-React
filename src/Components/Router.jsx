import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import AdminHome from '../Pages/AdminHome'
import RootLayout from './RootLayout'

/* Criando o Roteador */
const Router = createBrowserRouter(
    /* Passando as Rotas/Caminho Para o router */
    [
       {
        path: '/',
        element: <RootLayout/>,
        children: [{
            index:true,
            element:<Home/>
        } , {
            path:'Product',
            element: <Product/>
        }, {
            path: 'Cart',
            element: <Cart/>
        }]
       },
       {
        path: '/AdminHome',
        element: <AdminHome/>
       }
    ]
)

/* Importar o Router No app Principal E englobar com o componente do react RouterProvider*/

export default Router
