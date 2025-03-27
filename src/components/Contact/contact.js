import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_3gjfbmo', 'template_hrx56xl', form.current, {
            publicKey: 'UNnajZ81c4VxDao8_',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id="contactPage">
        {/* My Projects Section */}
        <div id="projects">
            <h1 className="contactPageTitle">My Projects</h1>
            <p className="clientDesc">
                Here are some standout projects that showcase my skills and creativity,
                from personal endeavors to academic collaborations.
            </p>
            <div className="projectsRow">
            {/* Project 1 */}
            <div className="worksSection">
                <h3 className="yellowText">Lorenzo's Adventure</h3>
                <p className="projectSubheading">2D Platformer Game</p>
                <p className="projectDescription">Composed and co-developed using Unity & C#.</p>
                <p><a href="https://eometheous.itch.io/lorenzos-adventure" target="_blank" rel="noopener noreferrer">Game Portfolio</a></p>
            </div>

            {/* Project 2 */}
            <div className="worksSection">
                <h3 className="yellowText">Portfolio Website</h3>
                <p className="projectSubheading">Personal Website</p>
                <p className="projectDescription">Designed and developed using React, showcasing projects and resume.</p>
                <p><a href="https://github.com/AustinAdair25/AustinAdair-Portfolio" target="_blank" rel="noopener noreferrer">Source Code</a></p>
            </div>
                {/* Project 3 */}
                <div className="worksSection">
                    <h3 className="yellowText">Lorenzo's Adventure</h3>
                    <p className="greySubheading">2D Platformer Game</p>
                    <p>Composed and co-developed using Unity & C#.</p>
                    <p><a href="https://eometheous.itch.io/lorenzos-adventure" target="_blank" rel="noopener noreferrer">Game Portfolio</a></p>
                </div>
            </div>
        </div>

        {/* Contact Section */}
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name'/>
                <input type="email" className="email" placeholder='Your Email' name='from_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;
