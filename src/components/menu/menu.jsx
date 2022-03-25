import "./menu.scss"


export default function menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "  + (menuOpen && "active")}>
        <ul>
            <li onClick={()=> setMenuOpen(false)}>
               <a href="#intro" >Home</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
               <a href="#portfolio" >Portfolio</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
               <a href="#works" >Works</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
               <a href="https://github.com/shubhammalhotra09" >GitHub</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
               <a href="https://drive.google.com/file/d/1sZTqWqlLGDyEEmXq15l0QZfQf9NsqEZF/view?usp=sharing" >Resume</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
               <a href="#contact" >Contact</a>
            </li>
        </ul>
    </div>
  )
}
