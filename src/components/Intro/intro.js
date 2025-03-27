import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/profile.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  const roles = "Software Developer";
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < roles.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + roles[index]);
        setIndex(index + 1);
      }, 150); // Adjust speed of typing here
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
            {/* Cursor will be inside introRole and appears after the typed text */}
            <span className="cursor" />
          </span>
        </span>
        <p className="introPara">
          I am a computer science graduate with experience in 
          <br /> software development, UI design, and building responsive, 
          <br /> user-friendly applications.
        </p>
        
        {/* Hire me button wrapped in Link */}
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
