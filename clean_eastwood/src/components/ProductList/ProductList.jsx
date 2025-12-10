import "./ProductList.css"
import {  useEffect, useState } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null)    
    const [orden, setOrden] = useState("relevante")        
    const [Filtros, setFiltros] = useState({categorias: [], tipos: []})
    const navigate = useNavigate()
   



    useEffect(() => { 
        const fetchProductos = async () => {
            try {
                const response = await fetch("/Productos.json");
                if (!response.ok) {
                    throw new Error("Error al obtener los productos");
                }
                const data = await response.json();
                setProducts(data);

            } catch (err) {
                setError(err.message);
            }
        }
        fetchProductos()
    }, []);

const toggleFiltros = (tipoFiltro, valor) => {
    setFiltros((prev) => ({
        ...prev,
        [tipoFiltro]: prev[tipoFiltro].includes(valor)
        ? prev[tipoFiltro].filter((item) => item !== valor)
        : [...prev[tipoFiltro], valor],
}))
}

const productosFiltrados = products.filter((producto) => {
    const matchCategoria =
     Filtros.categorias.length === 0 || Filtros.categorias.includes(producto.categoria);
    const matchTipo =
     Filtros.tipos.length === 0 || Filtros.tipos.categorias.includes(producto.tipo);  
    return matchCategoria && matchTipo;
})

    const handleOrdenChange = (e) => {
        setOrden(e.target.value);
    };
    const productosOrdenados = [...productosFiltrados].sort ((a, b) => {
        if (orden === "Precio: Alto a Bajo") {
            return b.precio - a.precio;
        } if (orden === "Precio:  Bajo a Alto") {
            return a.precio - b.precio;
        }
        return 0;
    });

    const handleImageClick = () => {
        navigate(`/producto/${id}`);
    }
  return (
    <section className="main-content">
        <aside className="filters">
            <h2> Filtros </h2>
            <div className="filters-category">
                <div className="filter-category">
                <h3> Categoria </h3>
                <label>
                    <input type="checkbox" 
                    onChange={() => toggleFiltros("categorias", "Detergentes")}
                    />
                    <span> Detergentes </span>
            </label>
            <label>
                    <input type="checkbox" 
                    onChange={() => toggleFiltros("categorias", "Desinfectantes")}
                    />
                    <span> Desinfectantes </span>
            </label>
            <label>
                    <input type="checkbox"
                    onChange={() => toggleFiltros("categorias", "Desengrasantes")} />
                    <span> Desengrasantes </span>
            </label>
            <label>
                    <input type="checkbox"
                    onChange={() => toggleFiltros("categorias", "Ambientadores")} />
                    <span> Ambientadores </span>
            </label>
            <label>
                    <input type="checkbox" 
                    onChange={() => toggleFiltros("categorias", "Superficies")}/>
                    <span> Superficies </span>
            </label>
            </div>

            <div className="filter-category">
                <h3> Tipos </h3>
                <label>
                    <input type="checkbox" 
                    onChange={() => toggleFiltros("tipos", "baños")}/>
                    <span> baños </span>
            </label>
            <label>
                    <input type="checkbox" 
                    onChange={() => toggleFiltros("tipos", "cocina")}/>
                    <span> cocina </span>
            </label>
            <label>
                    <input type="checkbox"
                    onChange={() => toggleFiltros("tipos", "pisos")} />
                    <span> pisos </span>
            </label>
            <label>
                    <input type="checkbox" 
                    onChange={() => toggleFiltros("tipos", "vidrios")}/>
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
                        <select onChange={handleOrdenChange} value={orden}> 
                            <option>Relevante</option>
                            <option>Precio: Bajo a Alto</option>
                            <option>Precio: Alto a Bajo</option>    

                        </select>
                    </label>
                </div>
            </div>

            <div className="products">
                {error ? (
                    <p className="error-message">{error}</p>
                ): productosFiltrados.length > 0 ?(
                    
                    productosOrdenados.map((producto) => (
                        <div className="product-card" key={producto.id}>
                            <img src={producto.image} 
                            alt={producto.nombre} 
                            className="product-image" 
                                onClick={() => handleImageClick(producto.id)}
                                /> 
                            <h3 >{producto.nombre}</h3>
                            <p >{producto.precio}</p>
                        </div>
                    ))
                ):(
                    <p className="no-results"> 
                    No se encontraron productos que coincidan con los filtros seleccionados. </p>   
                )}
                </div>

        </main>

    </section>
  )
}

export default ProductList  