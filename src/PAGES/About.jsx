import React from 'react'

import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'

const About = () => {

        const skills =[
            {id: 1, name: 'React', icon: <FaReact color='#61DBFB' className='icn'/> },
            {id: 2, name: 'Javascript', icon: <FaJs color='#F7DF1E' className='icn'/> },
            {id: 3, name: 'HTML5', icon: <FaHtml5 color='#E34F26' className='icn' /> },
            {id: 4, name: 'CSS3', icon: <FaCss3Alt color='#1572B6' className='icn'/> },
            {id: 5, name: 'GitHub', icon: <FaGithub color='#000' className='icn'/> },
            {id: 6, name: 'Node.js', icon: <FaNodeJs color='#339933' className='icn'/> }
        ]
    
  return (
    <>
    
    <div className='about'>
        <div className="head">
            <h1><span>ABO</span>UT ME</h1>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>

        <div className="abt-and-skill">
            <div className="abt">
                <h2>Get to know me!</h2>
               <p>
                 I'm a Fullstack Web Developer building and managing the Front-end and backend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. <br /> <br />
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming <br /> <br />
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
               </p>
            </div>

            <div className="skill">
               <h2>SKILLS</h2>
               <div className="skill-grid">
                {skills.map((skill) => (
                    <div key={skill.id} className='skill-card'>
                        <p>{skill.name}</p>
                        <div className="icon">{skill.icon}</div>
                    </div>
                ))}
               </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default About