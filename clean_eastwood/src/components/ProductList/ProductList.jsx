import "./ProductList.css"
import { use, useEffect, useState } from "react"


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);    
    
    useEffect(() => { 
        const fetchProductos = async () => {
            try {
                const response = await fetch("/src/components/ProductList/Productos.json");
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                const data = await response.json();
                setProductos(data);

            } catch (err) {
                setError(err.message);
            }
        }
        fetchProductos
    }, []);
  return (
    <section className="main-content">
        <aside className="filters">
            <h2> Filtros </h2>
            <div className="filters-category">
                <div className="filter-category">
                <h3> Categoria </h3>
                <label>
                    <input type="checkbox" />
                    <span> Detergentes </span>
            </label>
            <label>
                    <input type="checkbox" />
                    <span> Desinfectantes </span>
            </label>
            <label>
                    <input type="checkbox" />
                    <span> Desengrasantes </span>
            </label>
            <label>
                    <input type="checkbox" />
                    <span> Ambientadores </span>
            </label>
            <label>
                    <input type="checkbox" />
                    <span> Superficies </span>
            </label>
            </div>

            <div className="filter-category">
                <h3> Categoria </h3>
                <label>
                    <input type="checkbox" />
                    <span> baños </span>
            </label>
            <label>
                    <input type="checkbox" />
                    <span> cocina </span>
            </label>
            <label>
                    <input type="checkbox" />
                    <span> pisos </span>
            </label>
            <label>
                    <input type="checkbox" />
                    <span> vidrios </span>
            </label>
            </div>
        </div>
        </aside>
        <main className="collection">
            <div className="options">
                <h2>TODAS LAS COLECCIONES</h2>
                <div className="sort-options">
                    <label>
                        Ordenar por:
                        <select >
                            <option>Relevante</option>
                            <option>Precio: Bajo a Alto</option>
                            <option>Precio: Alto a Bajo</option>    

                        </select>
                    </label>
                </div>
            </div>

            <div className="products"></div>
                {error ? (
                    <p className="error-message">{error}</p>
                ):(
                    productos.map((producto) => (
                        <div className="product-card"
                    )
                )}
        </main>

    </section>
  )
}

export default ProductList  