import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
        <footer>
        
        <div className="row content mx-0 my-5 py-5 paddingClass">
        
        <div className='firstShade'></div>

            <div className="col-md-4 col-sm-12 px-5 footerData1">
                <div className="img">
                    <img src={logo} alt="img" />
                </div>
                <div className='para py-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque a eveniet saepe veniam nobis molestiae unde eligendi. Aliquam alias ex harum perferendis? Optio, earum dolores. Sit consequuntur suscipit nisi.</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-12 footerData2">
                <div className='px-5'>
                    <h4>Resources</h4>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            OUR PRODUCTS
                        </li>


                        <li><span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            Blogs & Guides
                        </li>


                        <li><span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            PREMIUM SUPPORTS

                        </li>



                        <li><span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            NEED A CAREER</li>
                    </ul>
                </div>
            </div>


            <div className="col-md-3 col-sm-12 footerData2">
            <div className='px-5'>
                    <h4>Links</h4>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            SUPPORT
                        </li>


                        <li><span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            PRIVACY
                        </li>


                        <li><span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            SETTING

                        </li>



                        <li><span>
                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                            </span>
                            MY ACCOUNT</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2 col-sm-12  lastContent">
                <div>
                    <h4>Contact</h4>
                </div>
                <div >
                    <h6>Email Address</h6>
                </div>
                <div className='footerh6'>
                    <h6>Support@gmail.com</h6>
                </div>
                
            </div>
        </div>
        <div className='lastShade'></div>
        <hr />
        <div className='last py-4 Reserved'>
            <h6>© 2022 Obelisk. All Rights Reserved</h6>
        </div>
        
        
        </footer>
    </>
  )
}

export default Footer
