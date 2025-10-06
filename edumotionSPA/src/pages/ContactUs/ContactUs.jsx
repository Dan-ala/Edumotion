// import { useState } from 'react'
import './ContactUs.css'

// const [values, setValues] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phoneNumber: '',
//     comment: '',
// })

const ContactUs = () => {
    return (
        <>
        <h3>CONTACTANOS</h3>

        <div className='contactForm'>
            <form>
                <label htmlFor="firstname">Nombre</label>
                <input type="text" placeholder='Ingresa tu nombre' name='firstname' id='firstname' />

                <label htmlFor="lastname">Apellido</label>
                <input type="text" placeholder='Ingresa tu apellido' name='lastname' id='lastname' />

                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Ingresa tu correo electrónico' name='email' id='email' />

                <label htmlFor="phoneNumber">Teléfono</label>
                <input type="number" placeholder='Ingresa tu número de teléfeno' name='phoneNumber' id='phoneNumber' />

                <label htmlFor="comment">Comentario</label>
                <input type="text" placeholder='Ingresa tu comentario' name='comment' id='comment' />

                <button type='button'>Limpiar</button>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </>
    )
}

export default ContactUs