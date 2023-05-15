

    const ItemDetail = (prod) => {
        return(
            <div className="col-3 m-3 text-center bg-white rounded" key={prod.id}>
                <h3 className="fs-8 text-center text-white"> {prod.nombre}</h3>
                <img className="img-prod" src={prod.img} alt={prod.nombre} width={300} height={300} />
                <p> {prod.descripcion} </p>
                <p> {prod.category} </p>
                <h4><strong> $ {prod.precio} </strong></h4>
            </div>
        )
    }
    export default ItemDetail