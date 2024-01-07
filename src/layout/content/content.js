import React from "react";
import './content.css';
import myimage from '../../assets/image/myimage.png'
import designeImage from '../../assets/image/1website-design-development-languages-on-laptop2.png'
import frontendImage from '../../assets/image/frontend_webdeveloper.jpg'
import hostingImage from '../../assets/image/hostingimage.jpg'

function App() {
  return (
    <div className="content">
   
   <span>HELLO,</span>
  <span> I </span>
  <span> AM</span>
  <span>NIKA</span>
  <br />
  <span>AND</span>
  <span> I</span>
  <span> AM</span>
  <span>FRONT-END</span>
  <span>DEVELOPER</span>

    <div></div>


      <div className='content2'>
        <div><img src={myimage} alt="Logo" id="myimage" /></div>
        <div>
           <h1>Welcome</h1>
           <h5>My name is Nika Abashidze, I'm a front-end developer based in Georgia.
             I have a big experience to create Websites and Web Applications.  </h5>
        </div>
      </div>

      <div className='content3'>


            <div>
             <h1>DESIGN</h1>
            <img src={designeImage} alt="other" id="content3Image" />
            </div>

            <div>
              <h1>FRONT-END</h1>
              <img src={frontendImage} alt="other" id="content3Image" />
              </div>

            <div>
            <h1>HOSTING</h1>
            <img src={hostingImage} alt="other" id="content3Image" />
            </div>
      </div>


      <div className="content4"></div>
      
    </div>
    
  );
}

export default App;