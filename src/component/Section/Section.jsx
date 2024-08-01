import React from "react";
import leftlogo from "../../assets/left-logo.png";
import { RxDashboard } from "react-icons/rx";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import portfolioimage from "../../assets/profileimage.jpg";
import { IoIosSearch } from "react-icons/io";
import { TfiBell } from "react-icons/tfi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { BiDockLeft } from "react-icons/bi";
import { BiDockBottom } from "react-icons/bi";
import { BiDockTop } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoRemoveOutline } from "react-icons/io5";
import { HiOutlinePaperClip } from "react-icons/hi2";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import con2 from "../../assets/con2.jpg";
import graph from "../../assets/graph.png";
import "./Section.css";

const Section = () => {
  return (
    <>
      <div className="container">
        <button className="start-button">Get Your Free Consultation Now</button>
        <div className="container-content">
          <h1 className="Heading">Manage Your team </h1>
          <h1 className="Heading">easily with task man</h1>
          <p>Statisda is a Shool Management System sloution that offers</p>
          <p>a personalize portal to each type of use</p>
        </div>
        <button className="get-start-button">Get Started</button>

        <div className="boxboard-container">
          <div className="boxboard-left">
            <div className="left-upper">
              <div className="left-logo">
                <div className="img-container">
                  <img src={leftlogo} />
                </div>
                <h3>Boxboard</h3>
              </div>

              <ul>
                <p>PAGES</p>
                <li>
                  <RxDashboard />
                  Dashboard
                </li>
                <li>
                  <BsFileEarmarkTextFill />
                  Projects
                </li>
                <li>
                  <MdMessage />
                  Messages
                </li>
                <li>
                  <GoClock />
                  Schedule
                </li>
                <li>
                  <IoIosContact />
                  Activity
                </li>
              </ul>
            </div>

            <div className="profile">
              <div className="profile-image ">
                <img src={portfolioimage} alt="" />
              </div>
              <div className="profile-content">
                <p> Artem Kyznetsov</p>
                <p>illustrator</p>
              </div>
            </div>
          </div>
          <div className="boxboard-right">
            <div className="boxboard-right-navbar">
              <h3>Projects</h3>
              <div className="search-input">
                <input type="text" placeholder="search" />
                <IoIosSearch className="search-icon" />
              </div>

              <button className="project-btn">
                {" "}
                <span>+ </span> New Project
              </button>

              <div className="bell-icon">
                <TfiBell />
                <FaCircle className="bell-circle" />
              </div>
              <BsGrid3X3GapFill className="dashboard"/>

              <div className="toggle">
                <MdToggleOff className="right-toggle" />
                <MdToggleOn className="left-toggle" />
              </div>
              <div className="profile-image navbar-image">
                <img src={portfolioimage} alt="" />
              </div>
            </div>

            {/* middle section start here */}

            <div className="middle">
              <div className="middle-left">
                <button>
                  <span>Show:</span>All Projects{" "}
                  <FaAngleDown className="downarrow" />
                </button>
                <button>
                  <span>Sort by:</span>Due Time{" "}
                  <FaAngleDown className="downarrow" />
                </button>
              </div>
              <button className="dock-btn">
                <span>
                  <BiDockLeft />
                </span>{" "}
                <span>
                  <BiDockBottom />
                </span>{" "}
                <span>
                  <BiDockTop />
                </span>
              </button>
            </div>

            <div className="right-down">
              <div className="right-down-left">
                <div className="right-down-left-top">
                  <p>TODO</p>
                  <HiOutlineDotsHorizontal />
                </div>

                <NewPost heading={"BoxBoard Multiple Ui Kit"} percentage={74} />
                <NewPost
                  heading={"BoxBoard Multipurpose Template"}
                  percentage={82}
                  color={"goldenrod"}
                />
                <NewPost
                  heading={"DesignStack Media"}
                  percentage={100}
                  color={"red"}
                />
              </div>

              <div className="right-down-left">
                <div className="right-down-left-top">
                  <p>DOING</p>
                  <HiOutlineDotsHorizontal />
                </div>
                <NewPost
                  heading={"BoxBoard Multiple Ui Kit"}
                  percentage={74}
                  image={graph}
                />

                <AddPost/>
              </div>
              <div className="right-down-left">
                <div className="right-down-left-top">
                  <p>DONE</p>
                  <HiOutlineDotsHorizontal />
                </div>
                <AddPost/>
              </div>
            </div>
          </div>
          {/* <div className="another"></div> */}
        </div>
      </div>

    </>
  );
};

const NewPost = ({ heading, percentage, color, image }) => {
  return (
    <div className="right-down-content">
      {image == graph && (
        <div className="content-top-image">
          <img src={image} alt="" />
        </div>
      )}

      {heading == "BoxBoard Multiple Ui Kit" && (
        <div className="right-down-content-line">
          <IoRemoveOutline className="line" />
          <IoRemoveOutline className="line" />
        </div>
      )}

      <div className="content-heading">
        {heading}

        <span>
          <HiOutlineDotsHorizontal />
        </span>
      </div>
      <p>Boxroard</p>

      <div className="right-down-content-button">
        <button>
          <HiOutlinePaperClip /> 21
        </button>

        {heading == "BoxBoard Multiple Ui Kit" && (
          <button className="number1">
            <IoIosCheckmarkCircleOutline />
            6/6
          </button>
        )}

        <button style={{ color: color }}>
          <BsClock />
          15 days left
        </button>
      </div>

      <div className="range">
        <div className="progressbar">
          <div className="fill-width" style={{ width: `${percentage}%` }}></div>
        </div>
        <span>{percentage + "%"}</span>
      </div>

      <div className="right-down-content-image">
        <div className="inner-image">
          <img src={con2} alt="" />
        </div>
        <div className="inner-image">
          <img src={con2} alt="" />
        </div>
        <div className="inner-image">
          <img src={con2} alt="" />
        </div>
        <div className="inner-image">
          <img src={con2} alt="" />
        </div>
        <div className="inner-image">
          <span>+2</span>
        </div>
      </div>
    </div>
  );
};

const AddPost=()=>{
  return (
    <div className="addpost">
      <p>+ Add New Card</p>
    </div>
  );
}

export default Section;
