import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function RootLayout () {
    return(
        <>
            <header>
{/* O React router fornece um componente especial o <Link><Link/> q permite ir de uma pagina para a outra sem att o navegador */}
{/* Obs: ele so muda para as paginas de dentro do App  */}
                <nav style={{display:"flex" , gap: '10px'}}>
                    <Link to='/'> Inicio !</Link>
                    <Link to='/Product'> Produtos!</Link>
                    <Link to='/Cart'> Carrinho!</Link>
                    <Link to='/AdminHome'> AdminHome!</Link>
                </nav>
            </header>

            <section>
                <h2>Tela Do layout </h2>
                <h2>Conteudo do Layout</h2>
                <Outlet/>{/* Tras as rotas filhas "conteudo" para essa parte do layout */}
            </section>
            <footer>
                <p>Roda pé do Layout</p>
            </footer>
        </>
    )
}

export default RootLayout