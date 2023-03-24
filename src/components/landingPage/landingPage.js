import '../../app/App.css';
//import './landingPage.css';
//import * as containerStyles from './landingPage.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Parallax } from 'react-scroll-parallax';
//import { ParallaxBanner } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';






function LandingPage(props) {  
/*
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
*/
const inheritSize = {
  height: 'inherit',
  width: 'inherit'
}
/*
const imgSize = {
  width: '100%',
  height: 'auto'
}

const parallaxRotate = useParallax<HTMLDivElement>({
    rotateY: [0, 360],
  });
*/
/*
  const matchOrientation = () => {
    if (window.matchMedia("(orientation: portrait)")){
      return {
        width: 'auto',
        height: '100%'
      };
    } else {
      return {
        width: '100%',
        height: 'auto'
      };
    }
  }
  */
 /*
const portraitStyle = {
  width: 'auto',
  height: '100%'
}

const landscapeStyle = {
  width: '100%',
  height: 'auto'
}
*/
const navBarStyling = {
  background: 'rgba(255,255,255,0.7)',  
  borderRadius: '0.25rem',
  padding: '0.25rem'

}

  return (
    
    <div className="App">
      {/*navbar*/}
      <nav className="navbar position-absolute w-100" id="navbarId" style={{zIndex: '10'}}>
        <div className="container-fluid">
              <NavLink 
                   to={"/home/"}
                   className="navbar-brand"                   
                   >
                     <h1 
                       className="m-auto" 
                       style={{...navBarStyling, fontFamily: "'Permanent Marker', Arial, sans-serif"}}
                       >
                        Now Chemistry
                     </h1>                     
              </NavLink>
          
          <button 
            style={navBarStyling} 
            className="navbar-toggler me-3"             
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar"
            >            
                 <NavLink 
                   to={"/home/"}
                   className="d-block text-decoration-none"                   
                   >
                     <span className="navbar-toggler-icon"></span>                     
                 </NavLink>
          </button>
        </div>
      </nav>
      
        {/*Call to action */}

        <div style={{...navBarStyling, zIndex: '10'}} className="text-center position-absolute top-50 start-50 translate-middle" >
          <h2 >For the chemistry you need to know right now</h2>

        </div>


        {/*Carousel code, images landing page*/}
    
    <div id="container" style={{height: '100vh', width: '100vw'}}>
    <div id="carouselExampleFade" style={inheritSize} className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
      <div className="carousel-inner" style={inheritSize}>
      <div className="carousel-item" data-bs-interval="4000"  style={inheritSize}  >
          <img src="images/landing/red-and-yellow-model-tetrahedral-lattice.jpg"  className="d-block position-absolute top-50 start-50 translate-middle" alt="photograph of workshop scene with frame chevrons on back wall and grey carpeted bench" />
        </div>
        <div className="carousel-item active" data-bs-interval="4000" aria-current="true" data-bs-slide-to="1" aria-label="Slide 2" style={inheritSize}>     
          <img src='images/landing/single-soap-bubble.jpg' className="d-block position-absolute top-50 start-50 translate-middle" alt="photograph of grey panelled double doors with homewares and plants in foreground and framing workshop in background" />
        </div>   
        
        <div className="carousel-item" data-bs-interval="4000"  data-bs-slide-to="2" aria-label="Slide 3" style={inheritSize}>
          <img src='images/landing/colourful-solutions.jpg' className="d-block position-absolute top-50 start-50 translate-middle" alt="closeup of corner of wooden frame" />
        </div>
        
        <div className="carousel-item" data-bs-interval="4000" data-bs-slide-to="3" aria-label="Slide 4" style={inheritSize}>
          <img src='images/landing/pink-amethyst-gemstone.jpg' className="d-block position-absolute top-50 start-50 translate-middle" alt="art print on desk with white frame chevron at corner" />
        </div>
        {/**
        {window.matchMedia("(min-width: 500px)") ? : null }window.matchMedia("(min-width: 500px)") ?  : 'none'
        style={(window.matchMedia("(orientation: portrait)") === true) ? portraitStyle : landscapeStyle} 
         */}
         
      </div>
      
    </div>
    </div>
    {/*Buttons to scroll back and forth through carousel*/}
    <div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

      
                 </div>
    
  );
}

export default LandingPage;

//below removed from "carousel-item" div containing bubble image
// active position-relative

//data-bs-slide-to="0" aria-label="Slide 1"