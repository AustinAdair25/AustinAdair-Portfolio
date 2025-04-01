import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/profile.png';
/*import { Link } from 'react-scroll';*/

const Intro = () => {
  const roles = "Software Developer";
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < roles.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + roles[index]);
        setIndex(index + 1);
      }, 150); // Adjust speed of typing
      return () => clearTimeout(timeout);
    }
  }, [index, roles]);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Austin Adair</span>
          <br />
          <span className="introRole">
            {typedText}
            <span className="cursor" />
          </span>
        </span>
        <p className="introPara">
          I am a computer science graduate with experience in 
          <br /> software development, UI design, and building responsive, 
          <br /> user-friendly applications.
        </p>

        {/* Contact Info aligned with the rest */}
        <div className="contactInfoContainer">
          <p className="contactInfo">📞 (310) 779-3404</p>
          <p className="contactInfo">✉️ austinadair683@gmail.com</p>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
