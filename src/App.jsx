import React from 'react';
import Header from './component/Header/Header';
import Section from './component/Section/Section';
import SectionTwo from './component/Section2/SectionTwo';
import SectionThree from './component/SectionThree/SectionThree';
import SectionFour from './component/SectionFour/SectionFour';
import SectionFive from './component/SectionFive/SectionFive';
import SectionSix from './component/SectionSix/SectionSix';
import SectionSeven from './component/SectionSeven/SectionSeven';
import Footer from './component/Footer/Footer';
// import MobileComponent from './component/MobileComponent/MobileComponent';
import './App.css';

function App() {
    return (
        <div className='main-container'>
            <Header />
            <Section />
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <Footer/>
        </div>
    );
}

export default App;
