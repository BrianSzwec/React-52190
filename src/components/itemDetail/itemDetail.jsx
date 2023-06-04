import { useState, useContext} from "react"
import ItemCount from "../itemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {

    const {agregarAlCarrito, isInCart } = useContext(CartContext)

    console.log(isInCart(item.id))

    const [cantidad, setCantidad] = useState(1)
    
    
   
    const handleAgregar = () =>{
      
        const newItem ={
            
            ...item,
            cantidad
        }    
        agregarAlCarrito(newItem)
            
        }

return(
            <div className="col-3 m-3 text-center bg-white rounded" key={item.id}>
                <h3 className="fs-8 text-center text-white"> {item.nombre}</h3>
                <img className="img-prod" src={item.img} alt={item.nombre} width={300} height={300} />
                <p> {item.descripcion} </p>
                <p> {item.category} </p>
                <h4><strong> $ {item.precio} </strong></h4>
                <p> Total : $ {item.precio * cantidad} </p>
                

                {
                    isInCart(item.id)
                    ?  <Link className="btn btn-success my-3" to="/cart">Terminar Compra</Link>

                    :<ItemCount
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    stock={ item.stock}
                    handleAgregar = {handleAgregar}
    
                    />
                }

                
           </div>
            
        )
    }
    export default ItemDetail