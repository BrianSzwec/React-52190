import { useEffect, useState } from "react"
import { pedirData } from "../../utils/pedirDatos"
import ItemList from "../itemList/itemList"








export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading , setLoading] =useState(true)
    


    useEffect(() => {
        setLoading(true)

        pedirData()
            .then((res) => {
                setProductos(res);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])


    return (

        <div className="container my-5">

            <h2 className="text-center display-9 text-white"><strong> Accede a los mejores Valores</strong></h2>

                {
                    loading
                    ? <h2 className="text-center display-9 text-white "> CARGANDO ...</h2>
                    :<ItemList items={productos}/>
                    


                }
            
            
        </div>


    )
}
