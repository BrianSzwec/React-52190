import { useState } from "react"


const Contacto = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''

    })


    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })


    }




    const HandleSubmit = (e) => {


        e.preventDefault()


        console.log("submits")
        console.log(values)


    }

    return (


        <div className="contact-form-container">
            <h2 className="contact-form-title">Contacto</h2>
            <hr />

            <form className="contact-form" onSubmit={HandleSubmit}>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    className="input-field"
                    type="text"
                    placeholder="Tu Nombre"
                />
                <input
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    className="input-field"
                    type="text"
                    placeholder="Direccion"
                />
                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    className="input-field"
                    type="email"
                    placeholder="Email"
                />

                <textarea name="comentario" rows="4" cols="73" placeholder="Escribe tu comentario aquí"></textarea>


                <button className="submit-button">Enviar Datos</button>
            </form>
        </div>
    )

}

export default Contacto
