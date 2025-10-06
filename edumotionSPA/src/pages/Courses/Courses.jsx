import './Courses.css'
import { useState } from 'react';
import { Title } from '../Home/Home';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


import { useEffect } from 'react';

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
}

const Paragraph = ({text, className}) =>{
    return (<p className={className}>{text}</p>)
}

const CoursesCard = ({title,url,text, price}) => {
    const [hasLiked, setHasLiked] = useState(false);
    
    return (
    <div className='card'>
        <img className="images" src={url} />
        <Title text={title} className='course-title'/>
        <Paragraph text={text} className='author'/>
        <Paragraph text={`COL $${price}`} className='price'/>
        <button id='card-button' onClick={() => setHasLiked(!hasLiked)}>
            {hasLiked ? "Enlistado ❤️":"Unirme 📝"} 
        </button>
    </div>
    )
}

const Courses = () => {

    const isMobile = useIsMobile();

    const courses = [
        {
            url: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
            title: "Fundamentos de la Programación",
            text: "Aprende la lógica de programación con ejercios prácticos junto con la mejor metodología",
            price: '80.000'
        },
        {
            url: "https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg",
            title: "Python & Machine Learning",
            text: "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
            price: '80.000'
        },
        {
            url: "https://images.pexels.com/photos/17483848/pexels-photo-17483848.png",
            title: "Generative AI for Beginners",
            text: "Generative AI Made Easy: Start Your Generative AI Journey, Learn ChatGPT, LLM, Prompt engineering, Create GenAI Chatbot",
            price: '80.000'
        },
        {
            url: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
            title: "The Ultimate React Course 2025",
            text: "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
            price: '80.000'
        },
        {
            url: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
            title: "C Programming Bootcamp",
            text: "C Programming 2025: Master the Fundamentals of C Programming Language. Join the Comprehensive C Bootcamp Masterclass!",
            price: '80.000'
        },
        {
            url: "https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg",
            title: "Coding for Kids: Code in Scratch...",
            text: "Designed by a computer science PhD and a Kid to teach kids how coding actually works, not just how to follow steps.",
            price: '44.900'
        },
    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, infinite: true, centerPadding: "0px", centerMode: true  },
            },
        ],
    };
    
    
    return (
    <>
    <h3 id="courses-title">LOS MEJORES CURSOS</h3>
    <div className='bigContainer'>
        <div className='component-margin'>
            <div className='trending-courses'>
                <h5 id='click'>Estás a un clic de aprender algo nuevo 🖱️</h5>
                <h5 id='trending'>Cursos en tendencia</h5>
            </div>
            {isMobile ? (
                <div className='card-scroll'>
                    {courses.map((course, idx) => (
                        <CoursesCard
                            key={idx} {...course} />
                    ))}
                </div>
        ) : (
            <div className='card-container'>
                <Slider {...settings}>
                    {courses.slice(0, 6).map((course, index) => (
                        <CoursesCard
                            key={index} {...course} />
                    ))}
                </Slider>
            </div>
        )}
        </div>
    </div>
    </>
    )
}


export default Courses