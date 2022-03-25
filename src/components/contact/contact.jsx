import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message,setMessage] = useState(false)

  const HandleSubmit = (e)=> {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className ="contact" id="contact">
        <div className="left">
            <img src="./assets/new.jpg" alt=""/>
        </div>
        <div className="right">
            <h2>Contact</h2>
            <form onSubmit={HandleSubmit}>
              <input type="text" placeholder="Email"/>
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
              {message && <span>Thanks for Contacting :) </span> }
            </form>
        </div>
    </div>
  )
}
