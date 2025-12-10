import { use } from "react"
import "./DetailsProduct.css"
import { useParams } from "react-router-dom"

const DetailsProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState (null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/Productos.json");
        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
  };
  
  return (
    <div>DetailsProduct</div>
  )
}, [id])

if (error) {
  return <h2 className="error-message">{error}</h2>
}

return (
  <div className="product-details">
    {
      product ? (
        <>
        <img src={product.imagen} alt={product.nombre} className="image-small" />
        <img src={product.imagen} alt={product.nombre} />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">{product.precio}</p>
          <p className="description">{product.descripcion}</p>
          <div className="size-options">
            <button className="size-button">1L</button>
            <button className="size-button">1.5L</button>
            <button className="size-button">3L</button>
            <button className="size-button">4L</button>
          </div>
          <button className="add-to-cart">Añadir al carrito</button>
        </div>
        <p className="note">
          producto 100% original. el pago contra reembolso está
          disponible para este producto.
          Política de devolución y cambio facil dentro de los 7 días.
          
          </p>
          </>

      ) : ( 
        <p>Cargando producto...</p>
      )
    }
  </div>
)
}
export default DetailsProduct