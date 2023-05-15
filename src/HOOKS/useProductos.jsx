// import { useEffect, useState, } from "react"
// import { pedirData } from "../utils/pedirDatos"


// export const useProductos = () =>{
//     const [productos, setProductos] = useState([])
//     const [loading , setLoading] =useState(true)
//     const { categoryId }= useParams()


//     useEffect(() => {
//         setLoading(true)

//         pedirData()
//             .then((data) => {

//             if (!categoryId){
                
//                 setProductos(data);
//             }else{ 
//                 setProductos(data.filter((el) => el.category === categoryId))
//             }
//                 // setLoading(false)
//             })
//             .catch((error) => {
//                 console.log(error);
//             })

//     }, [])

//     return ({
//         productos,
//         loading
//     })
// }