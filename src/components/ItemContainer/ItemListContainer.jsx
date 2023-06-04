import { useEffect, useState } from "react"
import { collection, getDocs, query,where } from "firebase/firestore"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"







export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading , setLoading] =useState(true)
    
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)


            const productosRef = collection (db, "Productos")

            const q = categoryId
                        
                        ?query(productosRef,where("category", "==", categoryId) )
                        : productosRef
            
            getDocs(q)

            
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }  )
                console.log(docs )
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

        
    }, [categoryId])
            

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
