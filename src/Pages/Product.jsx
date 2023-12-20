
import products from '../dataBase.json'

function Product () {
    return(
        <section>
            <h2>Todos os Produtos !</h2>
            <p>Confira Todas Nossas Ofertas !</p>
            <section className="products">
                <h3>Processadores</h3>
                <ul>
                {products.map((products) => 
                    <li key={products.id}>
                        <h4>{products.name}</h4>
                        <p>R$ {products.price}</p>
                        <button>Ver!</button>
                        <button>Comprar!</button>
                    </li>
                )}
                </ul>
            </section>
        </section>
    )
}

export default Product