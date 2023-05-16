import { useEffect, useState } from "react"
import { pedirData } from "../../utils/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/itemDetail"



        const ItemDetailContainer = () => {

            const[item, setItem] = useState()
            const[loading, setLoading] =useState(true)

            const{ itemId } = useParams()
            console.log(itemId)
            console.log(item)
            
        useEffect(()=>{
            setLoading(true)

             pedirData()     
             .then((data) =>setItem( data.find((el) =>el.id === parseInt(itemId)) ))
            .catch(err => console.log(err))
            .finally( () => setLoading(false))
            
        },[itemId])

        return(
        <div className="container my-5">
            {
            loading
            ?   <h2>cargando</h2>
            :   <ItemDetail item={item} />
            }
         </div>
        
        )
    } 
        export default ItemDetailContainer
        