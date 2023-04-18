import carrito from '../../assets/carro.svg'

const CartWidget = () => {
    return(
        <div>
            <a href=""><img src={carrito} className='carrito'/></a>
            <span>0</span>
        </div>
    )
}
export default CartWidget