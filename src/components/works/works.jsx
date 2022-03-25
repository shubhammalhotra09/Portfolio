import { useState } from "react"
import "./works.scss"

export default function Works() {
  const [currentslide,setCurrentSlide] = useState(0);
  const data = [ 
  {
    id: "1",
    icon: "assets/react.png",
    title:"React Application",
    desc: "React based web application to develop a Portfolio using React, Node.Js and other tools.",
    img:"https://cdn.dribbble.com/users/1748465/screenshots/15280676/media/bdcfd21027ec65add42ea5e2f5d99013.png?compress=1&resize=1200x900&vertical=top"
  },
  {
    id: "2",
    icon: "assets/chatbot.png",
    title:"chatbot",
    desc: "The Machine Learning  based Chatbot would facilitate rapid self-assessment of the individual using present physical symptoms, pre-existing medical condition.",
    img:"https://cdn.dribbble.com/users/736672/screenshots/15539599/media/8e690c79f896a5d7713373234011f94a.png?compress=1&resize=1200x900&vertical=top"
  },
  {
    id: "3",
    icon: "assets/php.png",
    title:"CapMomemts",
    desc: "School project in system paradigm course to implement PHP, Html and CSS to create a register and login page for a studio.",
    img:"https://cdn.dribbble.com/users/125948/screenshots/15215330/media/26988ae71f1e55b1c7b9303dd7f19896.jpg?compress=1&resize=1200x900&vertical=top"
  },

];

  const handleClick = (way)=> {
      way === "left" 
        ? setCurrentSlide(currentslide > 0 ? currentslide - 1 : 2) 
        : setCurrentSlide(currentslide < data.length - 1 ? currentslide + 1 : 0 );
  }


  return (
    <div className ="works" id ="works">
      <div className="slider" style={{transform: `translateX(-${currentslide * 100}vw)` }}>
        {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>
                  {d.desc}
                </p>
                <a href= "https://github.com/shubhammalhotra09">Projects</a>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt=""/>

            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/left.png" className= "arrow left" alt=""  onClick={()=>handleClick("left")}/>
      <img src="assets/right.png" className= "arrow right" alt="" onClick={()=>handleClick("")} />
    </div>
  )
}
