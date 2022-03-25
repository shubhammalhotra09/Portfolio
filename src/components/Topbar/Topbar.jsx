import "./Topbar.scss"
import {Person, Mail, LinkedIn} from "@material-ui/icons" 

export default function Topbar( {menuOpen, setMenuOpen }) {
  return (
      <div className={"Topbar " + (menuOpen && "active")} >
        <div className= "wrapper">
             <div className="left">
                <a href="#intro" className="logo">Shubh.</a>
                <div className="itemcontainer">
                <Person className="icon"/>
                <spam>+1 780 710 2109</spam>
                </div>
                <div className="itemcontainer">
                  <Mail className="icon"/>
                  <spam>shubhammalhotra09@gmail.com</spam>
                </div>
             </div> 

            <div className="right">
              <div className="itemcontainer">
                  <a href="https://www.linkedin.com/in/shubhammalhotra09/"><LinkedIn style={{ color: 'White' }}/></a>
              </div>
              <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}> 
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
      </div>
  )
}
