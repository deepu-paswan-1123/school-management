import React from 'react';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import './SectionTwo.css';

const SectionTwo = () => {
    
    const imagearr = [logo1, logo2, logo3, logo1, logo2, logo3];
    
    return (
        <div className='sectiontwo'>
            <h2>Trusted by companies like</h2>
            <div className="sectiontwo-image">
                {imagearr.map((item, index) => (
                    
                    <div className="logo-image" key={index}>
                        <img src={item} alt={`logo-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionTwo;
