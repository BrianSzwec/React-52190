import { Link } from "react-router-dom"


const ItemList = ({ items }) => {

    return (

        <div>
            <h2 className="fs-9 text-center display-9 text-white"><strong>OFERTAS</strong></h2>

            <div className="row">

                {
                    items.map((prod) =>
                        <div className="col-3 m-3 text-center bg-white rounded" key={prod.id}>
                            <h3 className="fs-8 text-center text-white">{prod.nombre}</h3>
                            <img className="img-prod" src={prod.img} alt={prod.nombre} width={300} height={300} />
                            <p>{prod.descripcion}</p>
                            <p>{prod.category}</p>
                            <h4><strong>$ {prod.precio}</strong></h4>
                            
                            <div>
                                </div>
                                <Link to={`/detail/${prod.id}`} className="btn btn-primary">ver mas</Link>
                        </div>
                    )
                }
            </div>


        </div>

    )
}
export default ItemList