import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
   

      const Cart = () =>{

        const {cart, emptyCart, removeItem} = useContext(CartContext)

        const total = cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
        const cantidadTotal = cart.reduce((acc, item) => acc + item.cantidad, 0);
        
        if(cart.length === 0){
          return(
          <div className="cart-container">
                      <h2 className="text-center display-9">Tu carrito esta Vacio</h2>
                      <hr />
                      <p className="text-center display-9"><strong>Ve a la tienda ! </strong> </p>
                      <Link to="/" className="btn btn-primary mx-8 d-flex justify-content-center align-items-center">Ver Productos </Link>
                      </div>
                      )
        }
        
        
        return(
            <div className="cart-container">
            <h2 className="cart-title">Carrito de Compras</h2>
            <div className="cart-items">
              {
                cart.map((item) =>(
                    <div key={item.id}>
                        <h3> {item.nombre}</h3>
                        <img src={item.img} width={50} height={50}/>
                        <p>Cantidad: {item.cantidad} </p>
                        <p> <strong> Precio: $ {item.precio}</strong> </p>  
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FaTrashAlt/></button>                  
                        <hr />
                    </div>
                ))
              }
            </div>
            <div className="cart-summary">
              <h3 className="summary-title">Resumen de la Compra</h3>
              <div className="summary-details">
                <p><strong>Total De compra : $ {total}</strong> </p>
                <p><strong>Total Articulos : {cantidadTotal} </strong></p>
                <button onClick={emptyCart} className="btn btn-danger" > Vaciar Carrito</button>
              </div>
              <Link to="/checkout" className="btn btn-success"> Terminar mi compra</Link>
            </div>
          </div>
        )

    }
    export default Cart