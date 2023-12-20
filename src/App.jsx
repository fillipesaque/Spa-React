
import './App.css'
import {RouterProvider } from 'react-router-dom'
import Router from './Components/Router'

function App() {

  return <RouterProvider router={Router}/>
}
export default App

/* Criando um Router 
01- Criar ele em um arquivo separado const Router = createBrowserRouter() e importar o CreatebrowserRouter
02- abrir um array de objetos e passa para eles o caminho Path:'/' e o elemento element: <Componente>
03- Exportar o router para a pagina App e englobar ela com o componente proprio do react <RouterProvider router={passar o Router}>
04- e Toda vez que o usuario digitar ex: localRost/ o caminho era cair no componente q vc designou para aquele caminho
*/
