import React from 'react';
import './Footer.css'

const Footer = () => {
    

    return (
        <>
            <div className='footer'>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <FootNav/>
                        <FootNav/>
                        <FootNav/>
                    </div>
                

                    <div className="footer-top-right">
                        <ul>
                            <h5>Lorem ipsum dolor </h5>
                            <li>Home jjjjjjjjj</li>
                        </ul>

                        <div className="btn-contain">
                            <p>Get your free consultation now</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>@2022 Scholl management. Copyright and all rigts reserved.</p>
                    <ul>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
        </>
    );
}


const FootNav=()=>{
    const footerarr = ["Home jjjjjjjjj", "Pricing hfdhdfj", "Use cases jsksi", 
        "Location hdhdhd", "FAQ kdkdkdd", "Company jdksodk"];
    return (
        
        <>
            <ul>
                <h5>Lorem ipsum dolor </h5>
                {footerarr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}
export default Footer;

