import React from 'react';
import iphone from '../../assets/iphone.png'
import profile from '../../assets/gg_profile.png'
import './SectionFour.css'

const SectionFour = () => {
    return (
        <div className="sectionfour-container">
            <div className='sectionfour'>
                <div className="sectionfour-left">
                    <div>
                        <h3>Lorem ipsum dolor sit amet,</h3>
                        <h3>consectetur adipiscing elit.</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Purus odio pellentesque pellentesque a. Amet
                        ut lobortis pellentesque a, luctus maecenas. 
                        
                    </p>
                    <p>Feugiat sed enim vitae viverra cras tristique 
                    eu. Pellentesque bibendum volutpat metus, dictum.</p>

                    <div className="sectionfour-logo">
                        <div className="profile-img">
                            <img src={profile} alt="" />
                        </div>
                        <div className="profile-content">
                            <h5>80,000k</h5>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p> consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="sectionfour-right">
                    <div className="sectionfour-right-img">
                        <img src={iphone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
