import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../itemDetail/itemDetail"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

        const ItemDetailContainer = () => {

            const[item, setItem] = useState()
            const[loading, setLoading] =useState(true)

            const{ itemId } = useParams()
            // console.log(itemId)
            // console.log(item)
            
        useEffect(()=>{
            setLoading(true)
            
            const docRef = doc(db, "Productos", itemId)

             getDoc(docRef)
             .then((doc)=> {
                const _item =  {
                    id: doc.id,
                    ...doc.data()
                }
                setItem(_item)
                
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
            
        },[itemId])

        return(
        <div className="container my-5">
            {
            loading
            ?   <h2 className="text-white mx-8 d-flex justify-content-center align-items-center"><strong>Cargando...</strong></h2>
            :   <ItemDetail item={item} />
            }
         </div>
        
        )
    } 
        export default ItemDetailContainer
        