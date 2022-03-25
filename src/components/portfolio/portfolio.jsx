
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import { webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data";


export default function Portfolio() {
      const [Selected,setSelected] = useState("web");
      const [Data,setData] = useState([]);

    const list=[
      {
        id: "web",
        title: "React Portfolio",
      },
      {
        id: "mobile",
        title: "Chatbot App",
      },
      {
        id: "design",
        title: "SMIS",
      },
      {
        id: "content",
        title: "CapMomemts",
      }, 
    ];
 
  useEffect(()=>{

    switch(Selected){
        case "web":
        setData(webPortfolio);
        break;
        case "mobile":
        setData(mobilePortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;  
        case "content":
        setData(contentPortfolio);
        break;
        default:
          setData(webPortfolio);

    }


  },[Selected])

  return (
    <div className= "portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) =>(
            <PortfolioList title={item.title} 
            active={Selected === item.id} 
            setSelected ={setSelected} 
            id={item.id}
            />
          ))}

        </ul>
        <div className="container">
              {Data.map(d=>(
            <div className="item">
              <img src={d.img} alt=""/>
              <h3>{d.title}</h3>
            </div>
            ))}           
        </div>
    </div>    
  )
}
