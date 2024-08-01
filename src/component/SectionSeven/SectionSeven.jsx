import React from 'react';
import keyboard  from '../../assets/keyboard.png'
import './SectionSeven.css'

const SectionSeven = () => {
    return (
        <div className='sectionseven'>
            <div className="sectionseven-image">
                <img src={keyboard} alt="" />
            </div>
            <div className="sectionseven-content">
                <h2>Interesting option
                from customer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    . Eget id arcu mauris sed augue volutpat tortor. 
                    Condimentum facilisis aenean elit sed mattis porttitor 
                    duis ornare justo.
                </p>

                <button>choose</button>
            </div>
        </div>
    );
}

export default SectionSeven;
