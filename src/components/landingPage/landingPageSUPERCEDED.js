import '../../app/App.css';
//import './landingPage.css';
//import * as containerStyles from './landingPage.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';


const siteWrapperStyle = {
    backgroundImage: "url('images/landing/red-and-yellow-model-tetrahedral-lattice.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'

}

const backgroundImageUrls = {
    bubble: "url('images/landing/single-soap-bubble.jpg')",
    sparkler: "url('images/landing/sparkler.jpg')",
    amethyst: "url('images/landing/pink-amethyst-gemstone.jpg')"
}    
    
const blackDiv = {
    width: '100%',
    height: '30vh',
    backgroundColor: 'black',
    color: 'white'
}

const parallaxRotate = useParallax<HTMLDivElement>({
    rotateY: [0, 360],
  });

function LandingPage(props) {  
  
  return (
    
    <div className="App">
       
    
    <div id="container">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active position-relative" data-bs-interval="4000" >     
          <img src='images/landing/single-soap-bubble.jpg' class="d-block position-absolute top-50 start-50 translate-middle" alt="photograph of grey panelled double doors with homewares and plants in foreground and framing workshop in background" />
        </div>   
        <div class="carousel-item" data-bs-interval="4000">
          <img src='images/landing/sparkler.jpg' class="d-block position-absolute top-50 start-50 translate-middle" alt="closeup of corner of wooden frame" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src='images/landing/pink-amethyst-gemstone.jpg' class="d-block position-absolute top-50 start-50 translate-middle" alt="art print on desk with white frame chevron at corner" />
        </div>
        {/**
        <div class="carousel-item" data-bs-interval="4000">
          <img src="./images/Carousel images/4.jpg" class="d-block position-absolute top-50 start-50 translate-middle" alt="photograph of workshop scene with frame chevrons on back wall and grey carpeted bench" /> 
        </div>
         */}
         
      </div>
      
    </div>
    </div>
    {/*Buttons to scroll back and forth through carousel*/}
    <div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


      <div className="site-wrapper" style={siteWrapperStyle}>

<div className="site-wrapper-inner">

  <div className="cover-container">

    <div className="masthead clearfix">
      <div className="inner">
        {/*<h3 className="masthead-brand">Cover</h3>*/}
        <nav>
          <ul className="nav masthead-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./about.html#booking-container">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="inner cover">
      <h1 className="cover-heading">Now Chemistry</h1>
      <p className="lead">Inspirational tutoring for a priceless future.</p>
      <p className="lead">
        <a href="./about.html#booking-container" className="btn btn-lg btn-default">Inquire about lessons now</a>
      </p>
    </div>
{/*
    <div className="mastfoot">
      <div className="inner">
        <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      </div>
    </div>
  */}
  </div>

</div>

</div>
<div style={blackDiv} ref={parallaxRotate.ref} className="d-flex text-center align-items-center">
    <p>Hello World!!</p>


    </div>
<ParallaxBanner
      layers={[
        { image: 'images/landing/single-soap-bubble.jpg', speed: -20 },
        
      ]}
      className="aspect-[2/1]"
    >
      <div style={{height: '80vh'}} className="absolute inset-0 flex items-center justify-center">
        <h1 style={{top: '50%'}} className="text-8xl text-white font-thin">Hello World!</h1>
      </div>
    </ParallaxBanner>
    <Parallax speed={30}>
    <div style={blackDiv} className="d-flex text-center align-items-center">
    <p>Hello World!!</p>


    </div>
    </Parallax>
    <ParallaxBanner
      layers={[
        { image: 'images/landing/sparkler.jpg', speed: -20 },
        
      ]}
      className="aspect-[2/1]"
    >
      <div style={{height: '80vh'}} className="absolute inset-0 flex items-center justify-center">
        <h1 style={{top: '50%'}} className="text-8xl text-white font-thin">Hello World!</h1>
      </div>
    </ParallaxBanner>
    <div style={blackDiv} className="d-flex text-center align-items-center">
    <p>Hello World!!</p>


    </div>
    <ParallaxBanner
      layers={[
        { image: 'images/landing/pink-amethyst-gemstone.jpg', speed: -20 },
        
      ]}
      className="aspect-[2/1]"
    >
      <div style={{height: '80vh'}} className="absolute inset-0 flex items-center justify-center">
        <h1 style={{top: '50%'}} className="text-8xl text-white font-thin">Hello World!</h1>
      </div>
    </ParallaxBanner >
    <div style={blackDiv} className="d-flex text-center align-items-center">
    <p>Hello World!!</p>


    </div>
     {/***/}
{/**
<section className="no-parallax">
<p >Testimonial: "Tom is a great teacher..., he is clear and precise about what he`s explaining and tries to relate it to real life."</p>
</section>
<Parallax translateY={[-40, 40]}>
<section  className="parallax bg">
<span className="background-image" style={{backgroundImage: backgroundImageUrls.amethyst, fontSize: "0.5rem"}} role="img" aria-label="image shows a large, pink amethyst cluster of crystals with hexagonal prisms protruding from its surface"> </span>
{/*<p>Real life chemistry: Amethyst is a gemstone with the formula SiO<sub>2</sub>, a giant covalent lattice structure with a tetrahedral arrangement of atoms</p> */}
{/**
</section>
</Parallax>
<section className="no-parallax">
<p>Testimonial: "Tom is a fantastic tutor - very professional, knowledgeable, understanding and helpful. My son really enjoys the lessons with Tom."</p>
</section>
<Parallax translateY={[-40, 40]}>
<section className="parallax bg">
<span className="background-image" style={{backgroundImage: backgroundImageUrls.sparkler, fontSize: "0.51rem"}} role="img" aria-label="image shows sparks flying from a fireworks sparkler"> </span>
{/*<p id="sparkler-text">Real life chemistry: In sparklers potassium chlorate oxidises the metal in a highly exothermic reaction</p> */}
{/**
</section>
</Parallax>
<section  className="no-parallax">
<p>Testimonial: "Tom is a fantastic tutor! He engaged my son really well in lessons, explained the topics thoroughly and took his time to make sure my son understood them properly."</p>
</section>

<Parallax translateY={[-40, 40]}>
<section  className="parallax bg">
<span className="background-image" style={{backgroundImage: backgroundImageUrls.bubble, fontSize: "0.51rem"}} role="img" aria-label="image shows a bubble with a rainbow hue, showing reflections of a tree by a river"> </span>

</section>
</Parallax>
{/*<p>Real life chemistry: Bubbles last longer with glycerol, an alcohol with the systematic name propan-1,2,3-triol</p>    */}
{/**
<section  className="no-parallax">
<p className="lead">
  <a href="./about.html" className="btn btn-lg btn-default">Why Now Chemistry?</a>
</p>
</section>
 */}
      <NavLink 
                   to={"/home/"}
                   className="d-block text-decoration-none"
                   
                   
                   >
                     Take me home!
                     
                 </NavLink>
                 </div>
    
  );
}

export default LandingPage;

