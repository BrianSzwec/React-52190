import { useEffect, useState } from "react"
import { pedirData } from "../../utils/pedirDatos"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"








export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading , setLoading] =useState(true)
    
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirData()
        
        .then((data) => {
            if (!categoryId){
                setProductos(data) 
            }else{
                setProductos(data.filter((el) => el.category === categoryId))
            }
        })
        .catch((err) =>console.log(err))
        .finally(()=>setLoading(false))
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
