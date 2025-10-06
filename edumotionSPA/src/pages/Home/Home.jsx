import './Home.css'

import { useState } from 'react'

const Title = ({text,className}) => {
  return (<h3 className={className}>{text}</h3>)
}

const Card = ({title,url}) => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className='home-card'>
      <img className="images" src={url} />
      <Title text={title}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button id='card-button' onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Enlistado ❤️":"Me gusta & Quiero apuntarme"} 
      </button>
    </div>
  )
}

const Home = () => {
  return (
    <>
    <h3 id='courses-title'>CURSOS</h3>
    <div className="Homecard-container">
      <Card 
        title="Webinars"
        url="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg" 
      />  
      <Card 
        title="Diplomados"
        url="https://images.pexels.com/photos/9159054/pexels-photo-9159054.jpeg"
      />
      <Card 
        title="Bootcamps"
        url="https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg"
      />
    </div>
    </>
  )
}

export default Home
export { Card, Title }