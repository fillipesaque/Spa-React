import { Link } from "react-router-dom"

function Header () {
    return(
        <header>
        <nav style={{display:"flex" , gap: '10px'}}>
            <Link to='/'> Inicio !</Link>
            <Link to='/Product'> Produtos!</Link>
            <Link to='/Cart'> Carrinho!</Link>
            <Link to='/AdminHome'> AdminHome!</Link>
        </nav>
        </header>
    )
}

export default Header