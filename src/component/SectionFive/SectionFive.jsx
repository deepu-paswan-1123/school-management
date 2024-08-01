import React from "react";
import vector from "../../assets/Vector.png";
import "./SectionFive.css";

const SectionFive = () => {
  return (
    <div className="sectionfive">
      <h2>Pick up the best plan</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
        pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
        maecenas.
      </p>

      <div className="sectionfive-content">
            <SecFiveCard/>
            <SecFiveCard/>
            <SecFiveCard/>
      </div>
    </div>
  );
};


export const SecFiveCard=({index})=>{
    return (
        <div className={`sectionfive-card ${index === 0 ? "active" : ""}`}>
          <div className={`top ${index === 0 ? "top-one" : ""}`}>
            <button className="stand-btn">Standard</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              odio pellentesque pellentesque a. Amet
            </p>

            <h3>
              $15 <span>/Month</span>
            </h3>
          </div>
          
          <div  className={`bottom ${index === 0 ? "bottom-one" : ""}`}>
            <div className="sectionfive-down">
              <div className="sectionfive-down-img">
                <img src={vector} alt="" />
                <p>For 1- 10 people in a team</p>
              </div>
              <div className="sectionfive-down-img">
                <img src={vector} alt="" />
                <p>For 1- 10 people in a team</p>
              </div>
              <div className="sectionfive-down-img">
                <img src={vector} alt="" />
                <p>For 1- 10 people in a team</p>
              </div>

              <button >Choose</button>
            </div>
          </div>
            <button  className={`choose-btn ${index === 0 ? " " : "choose-btn-one"}`}>choose</button>
        </div>
    );
}

export default SectionFive;
