import './skills.css'
import Header from '../../layout/header/header'; 
import Footer from '../../layout/footer/footer'; 




export default function skills() {
  return (
    <div>
      <Header/>
      <div className='skills'>

                <div>
                  <h3>Core Technologies:</h3>
                <p>Css</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>TypeScript</p>
                <p>NodeJS</p>
                <p>NextJS</p>
                </div>

                <div>
                  <h3>Others:</h3>
                  <p>Git</p>
                  <p>Github</p>
                  <p>Hosting</p>
                  <p>Cpanel</p>
                </div>

                <div>
                  <h3>UX/UI:</h3>
                  <p>Figma</p>
                  <p>Adobe Photoshop</p>
                  <p>Canva</p>
                </div>


               </div>
      <Footer/>
    </div>
  )
}
