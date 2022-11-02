import React from 'react'
import img1 from '../assets/header-img-825x1024.png'
import Carousel from "react-elastic-carousel";
import Item from "./Item";




const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
];

const breakPoints2 = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];

export default function Banner() {
    return (
        <>



            {/* ------------------------------------------------- */}
            <div className="row mx-0  mian-banner paddingClass">
                <div className="col-md-7 col-sm-12 submain">
                    <div className="heading">
                        <h1>Let’s Build Amazing Mobile Apps Together</h1>
                    </div>
                    <div className="para">
                        <p>Sit amet consectetur adipiscing elit, sed do eiusmod tempor idunte ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan</p>

                    </div>

                    <div className="row mx-0 btn">
                        <div className="col-md-6 col-sm-12 my-2 sub-btn-1">
                            <button>App Store</button>
                        </div>

                        <div className="col-md-6 col-sm-12 my-2 sub-btn-2">
                            <button>Google Play</button>
                        </div>

                    </div>

                </div>
                <div className="col-md-5 col-sm-12 py-5 submain2">
                    <div className="banner-img">
                        <img src={img1} alt="" />

                    </div>
                </div>
            </div>

            <div className="banner2">
                <div className="submain py-md-5">
                <div className='banner2Shade'></div>

                    <div className="heading">
                        <h2>We've 154+ Global Partners</h2>
                    </div>
                    <div className="para">
                        <p>Professional Design Agency to provide solution.</p>
                    </div>
                </div>

                <div className="row mx-0 p-md--5 banner2Imgs">

                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className='banner2ImgItems'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l1.png" alt="img" /></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className='banner2ImgItems'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l2.png" alt="img" /></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className='banner2ImgItems'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l3.png" alt="img" /></div>
                    </div>
                        {/* <div className='col-md-3 col-sm-6 col-6 banner2itemms'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l4.png" alt="img" /></div> */}
                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className="banner2ImgItems">
                    <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l4.png" alt="img" /></div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className='banner2ImgItems'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l4.png" alt="img" /></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className='banner2ImgItems'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l3.png" alt="img" /></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className='banner2ImgItems'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l2.png" alt="img" /></div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 banner2itemms">
                        <div className='banner2ImgItems'><img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/l1.png" alt="img" /></div>
                    </div>
                </div>
            </div>

            <div className="banner3 py-5">
                <div className="banner3section py-5">
                    <div className="row mx-0 paddingClass">
                        
                        <div className="col-md-6 ">
                        <div className='banner3Shade'></div>

                            <div className='banner3Img'>
                                <img src="https://obelisk.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/s1.png" alt="image" />
                            </div>

                        </div>
                        <div className="col-md-6 banner3Content">
                            <div className='p-3'>
                                <h6>Customize Application</h6>
                            </div>
                            <div className='p-3'>
                                <h3>We Tackle Your Most Ambitious Goals</h3>
                            </div>
                            <div className='p-3'>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta ecabo. Nemo enim ipsam voluptatem quia voluptas aspernatur</p>
                            </div>
                            <div className="banner3Btns1st">
                            
                        <div className="col-md-6 col-sm-12 my-2 sub-btn-1">
                            <button>Get free 7 days trial</button>
                        </div>


                                <div className=' readMoreBtn'>
                                    <span>Read More
                                        <i aria-hidden="true" className="fas fa-angle-right"></i>
                                    </span>
                                   


                                </div>

                            </div>

                            <div className="list">
                                <ul>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>
                                        Unique Design & Development</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Experience Team Members</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Powerfull Applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner4">
                <div className="banner3section py-5">
                    <div className="row mx-0 paddingClass">

                        <div className="col-md-6 banner3Content">
                            <div className='px-5'>
                                <h6>Core Features</h6>
                            </div>
                            <div className='px-5 my-5 heading3'>
                                <h3>Links, Content & Community. One Online Homepages. Save and Organise Ideas</h3>
                            </div>
                            <div className='px-5'>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta ecabo. Nemo enim ipsam voluptatem quia voluptas aspernatur</p>
                            </div>
                            <div className="banner3Btns">
                                <div className='row mx-0'>
                                    <div className="col-lg-6 col-md-12 col-sm-12 px-5   banner4Btn">
                                        <button className='btnOf4'>Get free 7 days trial</button>

                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12  read  readMoreBtn'>
                                        <span>Read More
                                            <i aria-hidden="true" className="fas fa-angle-right"></i>
                                        </span>
                                        <div className='col-md-6 col-sm-12'>

                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-md-6 ">
                            <div className='banner3Img'>
                                <img src="https://obelisk.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/s1.png" alt="image" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="banner5 ">
                <div className="heading py-5">
                    <h6>
                        <div class="obelisk-heading style-1 ">
                            <span class="mark left"></span>     Application Features     <span class="mark right"></span></div>
                    </h6>
                </div>
                <div className="subHeading py-3">
                    <h1>Amazing Features to Customize<br />
                        your Application Easy</h1>
                </div>
                <div className="row mx-0 px-5 banner5main marginbottom">
                    <div className="col-md-3 col-sm-12 col-12 cards p-5 m-5">

                        <div >
                            <div >

                            </div>
                            <div className='banner5icons'>

                                <h3 className='iconsMargin'><i className="fa-sharp fa-solid fa-rocket"></i>
                                    Modern Design</h3>
                            </div>
                            <div>
                                <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-3 cards col-md-3 col-sm-12 col-12 p-5 m-5">
                        <div >

                            <div className='banner5icons'>
                                <h3 className='iconsMargin'><i className="fa-brands fa-digital-ocean"></i>
                                    Modern Design</h3>
                            </div>
                            <div>
                                <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-3 cards col-md-3 col-sm-12 col-12 p-5 m-5">
                        <div >

                            <div className='banner5icons'>
                                <h3 className='iconsMargin'><i className="fa-solid fa-lock"></i>
                                    Modern Design</h3>
                            </div>
                            <div>
                                <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                            </div>

                        </div>
                    </div>


                    <div className="col-3 cards col-md-3 col-sm-12 col-12 p-5 m-5">
                        <div >

                            <div className='banner5icons'>
                                <h3 className='iconsMargin'><i className="fa-solid fa-mobile-screen"></i>
                                    Modern Design</h3>
                            </div>
                            <div>
                                <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                            </div>

                        </div>
                    </div>


                    <div className="col-3 cards col-md-3 col-sm-12 col-12 p-5 m-5">
                        <div >

                            <div className='banner5icons'>
                                <h3 className='iconsMargin'><i className="fa-solid fa-wallet"></i>
                                    Modern Design</h3>
                            </div>
                            <div>
                                <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-3 cards col-md-3 col-sm-12 col-12 p-5 m-5">
                        <div >

                            <div className='banner5icons'>
                                <h3 className='iconsMargin'><i className="fa-brands fa-digital-ocean"></i>
                                    Modern Design</h3>
                            </div>
                            <div>
                                <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="banner6">
                <div className="row mx-0 banner6content">

                    <div className="col-12 py-5">
                        <h6> Apps Screenshot </h6>
                    </div>

                    <div className="col-12 py-3">
                        <h2>Amazing Designer Create Our<br />
                            Application Let’s See</h2>
                    </div>
                </div>


                <div className='sliderWidth'>
                    <Carousel breakPoints={breakPoints}>
                        <Item className='sliderImgs'>
                            {
                                <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1.png" alt="" />
                            }
                        </Item>
                        <Item className='sliderImgs'>
                            {
                                <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/2.png" alt="" />
                            }
                        </Item>
                        <Item className='sliderImgs'>
                            {
                                <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/3.png" alt="" />
                            }
                        </Item>
                        <Item className='sliderImgs'>
                            {
                                <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/4.png" alt="" />
                            }
                        </Item>
                        <Item className='sliderImgs'>{
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/5.png" alt="" />
                        }</Item>
                        <Item className='sliderImgs'>
                            {
                                <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1.png" alt="" />
                            }
                        </Item>
                        <Item className='sliderImgs'>{
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/2.png" alt="" />
                        }</Item>
                        <Item className='sliderImgs'>{
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/3.png" alt="" />
                        }</Item>
                        <Item className='sliderImgs'>{
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/3.png" alt="" />
                        }</Item>
                        <Item className='sliderImgs'>{
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/4.png" alt="" />
                        }</Item>
                        <Item className='sliderImgs'>{
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1.png" alt="" />
                        }</Item>


                    </Carousel>
                </div>




            </div>

            <div className="banner6">
                <div className="row mx-0 banner6content">

                    <div className="col-12 py-5">
                        <div class="obelisk-heading style-1 ">
                            <span class="mark left"></span>     Working Process     <span class="mark right"></span></div>
                    </div>

                    <div className="col-12 py-3">
                        <h2>3 Step to Compalte Projects</h2>
                    </div>


                    <div className="row mx-0 banner6content">
                        <div className=" cards col-md-3 offset-md-2 col-sm-12 col-12 p-5 m-4">
                            <div className='data'>
                                <div className='banner7icons py-5'>
                                    <i class="fa-solid fa-cloud-arrow-down"></i>
                                </div>
                                <div className='banner7Text'>
                                    <h3> Download Apps</h3>
                                </div>
                                <div className='py-2'>
                                    <span className='text'>
                                        <p>STEP 01</p>
                                    </span>
                                </div>
                                <div>
                                    <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                </div>

                            </div>
                        </div>

                        <div className=" cards col-md-3 col-sm-12 col-12 p-5 m-4">
                            <div >
                                <div className='banner7icons py-5'>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div className='banner7Text'>
                                    <h3> Create Account</h3>
                                </div>
                                <div className='py-2'>
                                    <span className='text'>
                                        <p>STEP 02</p>
                                    </span>
                                </div>
                                <div>
                                    <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                </div>

                            </div>
                        </div>

                        <div className=" cards col-md-3 col-sm-12 col-12 p-5 m-4">
                            <div >
                                <div className='banner7icons py-5'>
                                    <i class="fa-solid fa-mobile"></i>
                                </div>
                                <div className='banner7Text'>
                                    <h3> Got Results</h3>
                                </div>
                                <div className='py-2'>
                                    <span className='text'>
                                        <p>STEP 03</p>
                                    </span>
                                </div>
                                <div>
                                    <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="banner8 py-5">



                <div className="row mx-0 banner8imgs paddingClass">

                    <div className="col-12 py-5">
                        <div class="obelisk-heading style-1 ">
                            <span class="mark left"></span>     Working Process     <span class="mark right"></span></div>
                    </div>

                    <div className="col-12 py-3">
                        <h2>We’ve Experience Team Member<br /> to Provide Solutions</h2>
                    </div>


                    <div className="col-md-3 banner8items py-5">
                        <div>
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1-1.png" alt="img" />
                            <h5 className='py-3'>Eddie E. Moseley</h5>
                            <p>CEO & Founder</p>
                        </div>







                    </div>

                    <div className="col-md-3 banner8items">
                        <div>
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/2-1.png" alt="image" />
                            <h5 className='py-3'>Eddie E. Moseley</h5>
                            <p>CEO & Founder</p>
                        </div>
                    </div>

                    <div className="col-md-3 banner8items">
                        <div>
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/3-1.png" alt="image" />
                            <h5 className='py-3'>Eddie E. Moseley</h5>
                            <p>CEO & Founder</p>
                        </div>
                    </div>

                    <div className="col-md-3 banner8items">
                        <div>
                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/4-1.png" alt="image" />
                            <h5 className='py-3'>Eddie E. Moseley</h5>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mx-0 banner9 py-5">


                <div className="col-12 py-5">
                    <div class="obelisk-heading style-1 ">
                        <span class="mark left"></span>     Pricing Package     <span class="mark right"></span></div>
                </div>

                <div className="col-12 py-3">
                    <h2>Popular Pricing Package for Design<br />Mobile Application</h2>
                </div>


                <div className="row mx-0  banner9extra">
                    <div className="col-md-5  col-sm-12 col-12 cards card1 p-5 m-5">

                        <div >
                            <div className='banner7Text'>
                                <h3> Free Package</h3>
                            </div>
                            <div className='banner7icons py-5'>
                                <i class="fa-solid fa-0"></i>
                            </div>

                            <div className='banner9Btns'>
                                <div className="col-md-4 col-sm-12 btn-1">
                                    <button>Get free 7 days trial</button>

                                </div>
                            </div>

                            <div className="list">
                                <ul >
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>
                                        Unique Design & Development</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Experience Team Members</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Powerfull Applications</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>
                                        Unique Design & Development</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Experience Team Members</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Powerfull Applications</li>
                                </ul>
                            </div>




                        </div>
                    </div>

                    <div className="col-md-5   col-sm-12 col-12 cards p-5 m-5">
                        <div >
                            <div className='banner7Text'>
                                <h3> Premium Package</h3>
                            </div>
                            <div className='banner7icons py-5'>
                                <i class="fa-solid fa-0"></i>
                            </div>

                            <div className='banner9Btns'>
                                <div className="col-md-4 col-sm-12 btn-2">
                                    <button>Get free 7 days trial</button>

                                </div>
                            </div>

                            <div className="list">
                                <ul>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>
                                        Unique Design & Development</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Experience Team Members</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Powerfull Applications</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>
                                        Unique Design & Development</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Experience Team Members</li>
                                    <li className='my-4'><span className="elementor-icon elementor-animation-">
                                        <i aria-hidden="true" className="fas fa-check"></i></span>Powerfull Applications</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div className="banner10">
                <div className="row mx-0">
                    <div className="col-12 py-5">
                        <div class="obelisk-heading style-1 ">
                            <span class="mark left"></span>      Clients Feedback      <span class="mark right"></span></div>
                    </div>

                    <div className="col-12 py-3">
                        <h2>Valuable Clinets Feedback<br />About Our Services</h2>
                    </div>

                    <div>

                        <Carousel breakPoints={breakPoints2}>
                            <Item>
                                <div className="slider2main">
                                    <div className='sliderIcon'>
                                        <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/qoute.png" alt="" />
                                    </div>
                                    <div className="sliderText">
                                        <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                    </div>
                                    
                                        <div className='sliderImage'>
                                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1-2.png" alt="img" />
                                        </div>
                                        <div className='imgText'>
                                            <p>Williams</p>
                                        </div>
                                        <div className='imgText'>
                                            <p>Senior Manager </p>
                                        </div>
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className="slider2main">
                                    <div className='sliderIcon'>
                                        <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/qoute.png" alt="" />
                                    </div>
                                    <div className="sliderText">
                                        <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                    </div>
                                    
                                        <div className='sliderImage'>
                                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1-2.png" alt="img" />
                                        </div>
                                        <div className='imgText'>
                                            <p>Williams</p>
                                        </div>
                                        <div className='imgText'>
                                            <p>Senior Manager </p>
                                        </div>
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className="slider2main">
                                    <div className='sliderIcon'>
                                        <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/qoute.png" alt="" />
                                    </div>
                                    <div className="sliderText">
                                        <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                    </div>
                                    
                                        <div className='sliderImage'>
                                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1-2.png" alt="img" />
                                        </div>
                                        <div className='imgText'>
                                            <p>Williams</p>
                                        </div>
                                        <div className='imgText'>
                                            <p>Senior Manager </p>
                                        </div>
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className="slider2main">
                                    <div className='sliderIcon'>
                                        <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/qoute.png" alt="" />
                                    </div>
                                    <div className="sliderText">
                                        <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                    </div>
                                    
                                        <div className='sliderImage'>
                                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1-2.png" alt="img" />
                                        </div>
                                        <div className='imgText'>
                                            <p>Williams</p>
                                        </div>
                                        <div className='imgText'>
                                            <p>Senior Manager </p>
                                        </div>
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className="slider2main">
                                    <div className='sliderIcon'>
                                        <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/qoute.png" alt="" />
                                    </div>
                                    <div className="sliderText">
                                        <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                    </div>
                                    
                                        <div className='sliderImage'>
                                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1-2.png" alt="img" />
                                        </div>
                                        <div className='imgText'>
                                            <p>Williams</p>
                                        </div>
                                        <div className='imgText'>
                                            <p>Senior Manager </p>
                                        </div>
                                    
                                </div>
                            </Item>
                            <Item>
                                <div className="slider2main">
                                    <div className='sliderIcon'>
                                        <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/qoute.png" alt="" />
                                    </div>
                                    <div className="sliderText">
                                        <p>unde omniste natus error sit voluptatem accus antium dolore mque laudant totam rem aperiam.</p>
                                    </div>
                                    
                                        <div className='sliderImage'>
                                            <img src="https://obelisktheme.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1-2.png" alt="img" />
                                        </div>
                                        <div className='imgText'>
                                            <p>Williams</p>
                                        </div>
                                        <div className='imgText'>
                                            <p>Senior Manager </p>
                                        </div>
                                    
                                </div>
                            </Item>


                        </Carousel>
                    </div>



                </div>
            </div>

            <div className="banner11 paddingClass">
                <div className="row  m-5 ">

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 banner11img">
                        <div className='main1'>
                            <img src="https://obelisk.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/call-img.png" alt="img" />
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 banner11Con'>
                        <div className='main2'>
                            <div className='p-5'>
                                <h5> Clients Feedback</h5>
                            </div>

                            <div className='px-5 heading2'>
                                <h2>We're Available on Store
                                    Download Your Apps</h2>
                            </div>
                            <div className='p-3'>
                                <button className='button1'>Apple Store</button>
                                <button className='button2 mx-1'>Google Play</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="banner12">
                <div className="row mx-0 paddingClass">
                    <div className="col-12 py-5">
                        <div class="obelisk-heading style-1 ">
                            <span class="mark left"></span>      Clients Feedback      <span class="mark right"></span></div>
                    </div>

                    <div className="col-12 py-3">
                        <h2>Valuable Clinets Feedback<br />About Our Services</h2>
                    </div>

                </div>

                <div className="row mx-0 m-5 py-5 paddingClass">

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12	 btnHover">
                        <div className="d-flex">
                            <div className='image1'>
                                <img src="https://obelisk.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/1.jpg" alt="img" />
                            </div>
                            <div className='content1'>
                                <div className='p-3'>
                                    <h6>DESIGN & ARTS</h6>
                                </div>
                                <div className='p-3'>
                                    <h5>Everything You Want Know About Creating Voice Interfaces</h5>
                                </div>
                                <div className='px-3'>
                                    <p>Post By : <span>Andres Alfaro</span> Comments : (0)</p>
                                </div>
                                <div className='btn'>
                                    <button>Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 btnHover">
                        <div className="d-flex">
                            <div className='image1'>
                                <img src="https://obelisk.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/2.jpg" alt="img" />
                            </div>
                            <div className='content1'>
                                <div className='p-3'>
                                    <h6>DESIGN & ARTS</h6>
                                </div>
                                <div className='p-3'>
                                    <h5>Everything You Want Know About Creating Voice Interfaces</h5>
                                </div>
                                <div className='px-3'>
                                    <p>Post By : <span>Andres Alfaro</span> Comments : (0)</p>
                                </div>
                                <div className='btn'>
                                    <button>Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>







                    {/* <div className="col-md-6">
                        <div className="row mx-0">
                            <div className="col-md-6">
                                <div className="d-flex">
                                <img src="https://obelisk.smartinnovates.com/demo16/wp-content/uploads/sites/17/2022/03/2.jpg" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className='p-3'>
                                    <h6>DESIGN & ARTS</h6>
                                </div>
                                <div className='p-3'>
                                    <h5>Everything You Want Know About Creating Voice Interfaces</h5>
                                </div>
                                <div className='px-3'>
                                    <p>Post By : <span>Andres Alfaro</span> Comments : (0)</p>
                                </div>
                                <div className='btn'>
                                    <button>Read More </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}
