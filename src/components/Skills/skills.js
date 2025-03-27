import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">
        I have a strong foundation in JavaScript, React, HTML, and CSS, along with proficiency in programming languages 
        like Java, Python, and C++. My expertise includes creating efficient, user-friendly applications and I have a strong 
        understanding of software architecture and problem-solving.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Software Development</h2>
                    <p>Proficient in building efficient and scalable applications using languages like Java, Python, and C++, 
                        with a focus on problem-solving and optimization.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Experienced in designing intuitive and user-centric interfaces using JavaScript and React, enhancing 
                        usability and delivering seamless user experiences.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Full Stack Development</h2>
                    <p>Skilled in both front-end and back-end development, with expertise in creating dynamic, responsive web 
                        applications and managing databases.</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills