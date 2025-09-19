import './Testimonies.css'

const TestimoniesCards = ({fullname,comment,url}) => {
    return (
        <div className='testimonies-card'>
            <div className='portrait'>
                <h4>{fullname}</h4>
                <img className="images2" src={url} />
            </div>
            <div className='comment'>
                <p id='comment'>{comment}</p>
            </div>
        </div>
    )
}

const Testimonies = () => {
    return (
            <div className="testimonies-container">
                <h3 id='testimonies-title'>TESTIMONIOS</h3>
                <div className='testimonies-cards-container'>
                    <TestimoniesCards 
                        fullname="Eduardo Pérez"
                        comment="Gracias a los cursos de Edumotion, pude cambiar de carrera y ahora trabajo en una empresa tecnológica. ¡Recomiendo mucho esta plataforma!"
                        url="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    />
                    <TestimoniesCards 
                        url="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
                        fullname="María Gómez"
                        comment="Los instructores son muy profesionales y los contenidos están actualizados. Aprendí mucho en poco tiempo y pude aplicar mis conocimientos en mi trabajo."
                    />
                    <TestimoniesCards 
                    url="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg"
                    fullname="Luis Rodríguez"
                    comment="Edumotion me ayudó a adquirir nuevas habilidades y a mejorar mi perfil profesional. No tenía ningún conocimiento previo en tecnología, pero con sus cursos logré avanzar rápidamente."
                    />
                </div>           
            </div>
    )
}

export default Testimonies