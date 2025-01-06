import React from 'react'
import "../app/styles/card.css";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const isClint = typeof window !== "undefined"
  return (
    <div className={`card ${isClint && window.innerWidth >= 640 ? "card-sm": ''}`} data-aos="zoom-in-up">
      <div>
        <img className= {`card ${isClint && window.innerWidth >= 640 ? "card-image-sm": ''}`}
          src={img}
          width={300}
          height={300}
          alt={title}
        />
      </div>
      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className='card-tags' key={el} >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card