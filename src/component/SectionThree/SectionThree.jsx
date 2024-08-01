import React from 'react';
import './SectionThree.css'
import con2 from '../../assets/con2.jpg'
import { CiCalendar } from "react-icons/ci";

const SectionThree = () => {
    return (
        <div className='sectionthree-container'>
        <div className='sectionthree'>
            <div className="sectionthree-left">
                <SectionthreePost/>
                <SectionthreePost/>
                <SectionthreePost/>
                <SectionthreePost/>
            </div>
            <div className="sectionthree-right">
                <div className="sectionthree-form">
                    <h2>Create Your task</h2>
                    <p style={{marginTop:"1rem"}}> Statisdaa is a  school management solution that offers a
                        personalized portal to each type of user, ensuring that
                        your institution is always engaged with teachers, students,
                        and their parents</p>

                    <input type="text" placeholder='Create your task' />
                    <input type="text" placeholder='Create your task' />

                    <div className="form-content">
                        <h5>Manage the task easily and clearly</h5>
                        <p>Statisdaa increases communication between all stakeholders: 
                            students, teachers, parents and administrative staff, with a 
                            dedicated web portal for any type of end-user. Keeping your students and parents
                            engaged with the academic process is a crucial factor in each student’s success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}



const SectionthreePost=()=>{
    return (
        <div className="sectionthree-post">
            <h3>Slack integration</h3>
            <p>Statisdaa is a school management solution that offers a personalized 
                portal to each type of user.</p>

            <div className="sectionthree-content">
                <button>Developer</button>
                    <div className="sectionimage-container">
                        <div className="sectionthree-image">
                            <img src={con2} alt="" />
                        </div>
                        <div className="sectionthree-image">
                            <img src={con2} alt="" />
                        </div>
                        <div className="sectionthree-image">
                            <img src={con2} alt="" />
                        </div>
                    </div>
            </div>

            <div className="sectionthree-number">
                <p>8</p>
                <p><CiCalendar  className='calender-icon'/> 7 Aug 2024</p>
                
            </div>
        </div>
    );
}

export default SectionThree;
