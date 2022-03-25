import "./intro.scss"

export default function intro() {
  return (
    <div className= "intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="./assets/man.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi,there. I'm </h2>
          <h1>Shubham Malhotra</h1>
          <h3>Freelance Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="./assets/down.png" alt=""/>
        </a>
      </div>

     </div>
  )
}
