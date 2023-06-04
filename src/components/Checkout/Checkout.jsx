import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"


const Checkout = () => {

    const { cart, total, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''

    })
    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)

        const { nombre, direccion, email } = values

        if (nombre.length < 3) {
            alert("Nombre demasiado Corto")
            return
        }
        if (direccion.length < 3) {
            alert("Direccion poco exacta")
            return
        }
        if (email.length < 3) {
            alert("Email incorrecto")
            return
        }



        const orden = {
            client: values,
            items: cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.cantidad })),
            total: total(),
            fyh: new Date()
        }
        console.log(orden)





        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })

    }
    if (orderId) {
        return (
            <div className="containerOr my-5">
                <h2 className="title">Tu compra se ha hecho Exitosamente</h2>
                <hr />
                <p className="order-text">Guarda el código de orden: <span className="order-id">{orderId}</span></p>
                <Link to="/" className="back-link">Volver</Link>
            </div>
        )
    }



    if (cart.length === 0) {
        return <Navigate to="/" />

    }
    return (
        <div className="checkout-form-container my-5">
            <h2 className="h2check">Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre"
                    value={values.nombre}
                    name="nombre"
                    onChange={handleInput}
                />

                <input
                    className="form-control"
                    type="text"
                    placeholder="Direccion"
                    value={values.direccion}
                    name="direccion"
                    onChange={handleInput}
                />

                <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    name="email"
                    onChange={handleInput}
                />
                <button className="btn btn-primary btn-lg d-block mx-auto mt-3" type="submit">Enviar</button>
            </form>

        </div>
    )
}
export default Checkout