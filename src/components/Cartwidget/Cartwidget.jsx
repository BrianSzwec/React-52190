import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaCartPlus } from 'react-icons/fa'

const CartWidget = () => {
    const {cart ,totalCantidad} = useContext(CartContext)
    return(
        
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? `cart-widget-active` :''} `} >
            <FaCartPlus className='svgCart '/>
            <span className='numberCart'>{totalCantidad()}</span>
        </Link>
            

    )
}
export default CartWidget