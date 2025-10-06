import { useState } from 'react'
import './ContactUs.css'


const ContactUs = () => {

const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    comment: ''
})

const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
}

const ResetFun = () => {
    setValues({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        comment: ''
    })
}

    return (
        <>
        <h3>CONTACTANOS</h3>

        <div className='contactForm'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Nombre</label>
                <input type="text" placeholder='Ingresa tu nombre' name='firstname' id='firstname' 
                onChange={(e) => handleChanges(e)} required value={values.firstname}/>

                <label htmlFor="lastname">Apellido</label>
                <input type="text" placeholder='Ingresa tu apellido' name='lastname' id='lastname' 
                onChange={(e) => handleChanges(e)} required value={values.lastname}/>

                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Ingresa tu correo electrónico' name='email' id='email' 
                onChange={(e) => handleChanges(e)} required value={values.email}/>

                <label htmlFor="phoneNumber">Teléfono</label>
                <input type="number" placeholder='Ingresa tu número de teléfeno' name='phoneNumber' id='phoneNumber' 
                onChange={(e) => handleChanges(e)} required value={values.phoneNumber}/>

                <label htmlFor="comment">Comentario</label>
                <input type="text" placeholder='Ingresa tu comentario' name='comment' id='comment' 
                onChange={(e) => handleChanges(e)} required value={values.comment}/>

                <button type='button' id='clear' onClick={ResetFun}>Limpiar</button>
                <button type="submit">Enviar</button>
            </form>
        </div>
        </>
    )
}

export default ContactUs