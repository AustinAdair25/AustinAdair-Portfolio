import React from 'react';
import './works.css';
/*import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'*/

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">Work Experience</h2>
            
            <div className="worksSection">
                <h3>Right at School - Program Manager</h3>
                <p>Sunnyvale, CA | November 2024 - January 2025</p>
                <ul>
                    <li>Managed program operations, scheduling, and staff coordination, improving workflow efficiency.</li>
                    <li>Analyzed and maintained program data to ensure accuracy and compliance with company policies.</li>
                    <li>Collaborated with leadership to optimize operations, leveraging problem-solving skills to improve processes.</li>
                </ul>
            </div>

            <div className="worksSection">
                <h3>X-treme Audio Visual - Audio Visual Technician</h3>
                <p>San Jose, CA | June 2023 - January 2025</p>
                <ul>
                    <li>Installed and configured audio-visual systems, troubleshooting technical issues to ensure seamless event execution.</li>
                    <li>Provided live on-site support, quickly diagnosing and resolving hardware/software malfunctions.</li>
                    <li>Delivered high-level client service, adapting AV solutions to unique requirements in dynamic environments.</li>
                </ul>
            </div>

            <div className="worksSection">
                <h3>Dobil Laboratories - Audio Visual Director</h3>
                <p>San Rafael, CA | January 2020 - August 2021</p>
                <ul>
                    <li>Utilized <span className="yellowText">Salesforce</span> to generate event orders, draft invoices, and track sales performance to ensure accurate financial documentation and efficient revenue management.</li>
                    <li>Proactively engaged in client outreach and relationship-building to promote and sell audio-visual equipment and services, driving significant revenue growth.</li>
                    <li>Closed sales deals with clients by identifying their needs and recommending tailored solutions, resulting in a 20% increase in revenue through upselling of technology services.</li>
                    <li>Leveraged the Crestron integration system to co-design a program enabling remote operation of projection and lighting equipment via iPads and in-room touchscreens.</li>

                </ul>
            </div>

            <h2 className="worksTitle">Repository</h2>

            <div className="worksSection">
                <p>A collection of all my projects on GitHub</p>
                <ul>
                    <li><a href="https://github.com/AustinAdair25" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>    
                </ul>
            </div>
        </section>
    );
};

export default Works;