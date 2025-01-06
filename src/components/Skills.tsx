import React from 'react'
import "../app/styles/skills.css";

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div className='skills-left'>
          <h2 className='skills-heading' data-aos="zoom-in-up">Technology I work with</h2>
          <p className='skills-text'>I have a solid foundation in web development,
            specializing in HTML, CSS and Javascript. My experience entends to using framwork like
            React and Next.js to create daynamic and user-friendly application. I also proficient in
            Tailwind CSS for efficient styling and design , with a possion for learning, I stay update
            on the latest technologies to enhance my skills set an contribute effectively to projects.</p>
        </div>
        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 >Typescript</h2>
              <h2 >React.js</h2>
              <h2 >Next.js</h2>
            </div>
            <div className='skills-space'>
              <h2 >Tailwind</h2>
              <h2 >CSS</h2>
              <h2 >HTML</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
