


const ItemDetail = ({item}) => {

return(
            <div className="col-3 m-3 text-center bg-white rounded" key={item.id}>
                <h3 className="fs-8 text-center text-white"> {item.nombre}</h3>
                <img className="img-prod" src={item.img} alt={item.nombre} width={300} height={300} />
                <p> {item.descripcion} </p>
                <p> {item.category} </p>
                <h4><strong> $ {item.precio} </strong></h4>
                <button className="btn btn-primary mb-3">Agregar a carrito</button>
                
                
           </div>
            
        )
    }
    export default ItemDetail