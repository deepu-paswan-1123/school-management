import React from 'react';
import con2 from '../../assets/con2.jpg'
import { SecFiveCard } from '../SectionFive/SectionFive';
import './SectionSix.css'

const SectionSix = () => {
    return (
        <div className='sectionsix'>
           <div className="sectionsix-upper">
                <h3>Interesting option
                from customer</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Purus odio pellentesque pellentesque a. Amet</p>
           </div>

           <div className="sectionsix-lower">
                <div className="sectionsix-image">
                    <img src={con2} alt="" />
                </div>
                <SecFiveCard index={0}/>
           </div>
        </div>
    );
}

export default SectionSix;
