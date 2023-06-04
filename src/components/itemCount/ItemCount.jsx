

const ItemCount = ( {  cantidad, setCantidad, handleAgregar}) =>{

    

        const BtnRestar = () =>{
           cantidad > 1 && setCantidad(cantidad - 1)
        }
        const BtnSumar = () =>{
            cantidad >  setCantidad(cantidad + 1)
        }
        // const Agregar = () =>{
    //          console.log({
    //              ... item,
    //              cantidad
    //   })
        // }

    return(
        <div>
            <button className="btn btn-outline-primary" onClick={BtnRestar}>-</button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-primary" onClick={BtnSumar}>+</button>
            <br />
            <button onClick={handleAgregar} className="btn btn-success my-3">Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount