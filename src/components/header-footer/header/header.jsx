import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Header() {

  const [thisUrl, setThisUrl] = useState("")

  const [closeTab, setCloseTab] = useState(true);


  
  let allSlice = document.querySelectorAll("._slice");
  allSlice = [...allSlice];

  useEffect(() => {
    let all = document.querySelectorAll(".menuEl");
    all = [...all]


    openTabMenu();

    let allLi = document.querySelectorAll(".liMenuEl");
    allLi = [...allLi];
    if(window.location.pathname === "/servis"){
      document.querySelector(".textFooter").style.color = "black";
        all.map(el => {el.style.color = "white";el.style.fontWeight = "200";})
        allLi.map(el => {el.style.filter = "drop-shadow(0px 0px 6px black)"; el.style.margin = "0 4%";});

        if(window.innerWidth < 600){
          document.querySelector(".sqere").style.border = "solid 2px white";
          allSlice.map(el => el.style.background = "white")
          allSlice.map(el => el.style.height = "3px")
          }else{
            document.querySelector(".sqere").style.border = "solid 3px white";
            allSlice.map(el => el.style.background = "white")
          }

    }else if(window.location.pathname === "/"){
      document.querySelector(".textFooter").style.color = "black";
        all.map(el => {el.style.color = "#ff2020"; el.style.fontWeight = "500";})
        allLi.map(el => {el.style.filter = "drop-shadow(0px 0px 6px black)"; el.style.margin = "0 4%";});

        if(window.innerWidth < 600){
          allSlice.map(el => el.style.height = "3px")
          }
          document.querySelector(".sqere").style.border = "solid 3px #cb1f1feb";
            allSlice.map(el => el.style.background = "#cb1f1feb")

    }else if(window.location.pathname === "/contact"){
      document.querySelector(".textFooter").style.color = "white";
      all.map(el => {el.style.color = "white"; el.style.fontWeight = "200";})
      allLi.map(el => {el.style.filter = "drop-shadow(0px 0px 6px black)"; el.style.margin = "0 4%";});

        if(window.innerWidth < 600){
        document.querySelector(".sqere").style.border = "solid 2px white";
        allSlice.map(el => el.style.background = "white")
        allSlice.map(el => el.style.height = "3px")
        }else{
          document.querySelector(".sqere").style.border = "solid 3px white";
          allSlice.map(el => el.style.background = "white")
        }

    }else{
      document.querySelector(".textFooter").style.color = "white";
      if(window.innerWidth < 940){
        all.map(el => {el.style.color = "white"; el.style.fontWeight = "300";})

        if(window.innerWidth < 600){
        document.querySelector(".sqere").style.border = "solid 2px white";
        allSlice.map(el => el.style.background = "white")
        allSlice.map(el => el.style.height = "3px")
        }else{
          document.querySelector(".sqere").style.border = "solid 3px white";
          allSlice.map(el => el.style.background = "white")
        }

      }else{
      all.map(el => {el.style.color = "#484848"; el.style.fontWeight = "300";})}
      allLi.map(el => {el.style.filter = "drop-shadow(0px 0px 0px black)"; el.style.margin = "0 3%";});
    }


}, [thisUrl])


useEffect(() => {
  let allSlice = document.querySelectorAll("._slice");
  allSlice = [...allSlice];
  

    if(window.location.pathname === "/servis"){
        
      if(window.innerWidth < 600){
        document.querySelector(".sqere").style.border = "solid 2px #e5e5e5e8";
        allSlice.map(el => el.style.background = "#e5e5e5e8")
        allSlice.map(el => el.style.height = "3px")
        }else{
          document.querySelector(".sqere").style.border = "solid 3px #e5e5e5e8";
          allSlice.map(el => el.style.background = "#e5e5e5e8")
        }


    }else if(window.location.pathname === "/"){

        if(window.innerWidth < 600){
          allSlice.map(el => el.style.height = "3px")
          }
          document.querySelector(".sqere").style.border = "solid 3px #cb1f1feb";
            allSlice.map(el => el.style.background = "#cb1f1feb")

    }else if(window.location.pathname === "/contact"){

        if(window.innerWidth < 600){
          document.querySelector(".sqere").style.border = "solid 2px #e5e5e5e8";
          allSlice.map(el => el.style.background = "#e5e5e5e8")
          allSlice.map(el => el.style.height = "3px")
          }else{
            document.querySelector(".sqere").style.border = "solid 3px #e5e5e5e8";
            allSlice.map(el => el.style.background = "#e5e5e5e8")
          }

    }else{
        
        if(window.innerWidth < 600){
          document.querySelector(".sqere").style.border = "solid 2px #e5e5e5e8";
          allSlice.map(el => el.style.background = "#e5e5e5e8")
          allSlice.map(el => el.style.height = "3px")
          }else{
            document.querySelector(".sqere").style.border = "solid 3px #e5e5e5e8";
            allSlice.map(el => el.style.background = "#e5e5e5e8")
          }

    
    }
}, [])



function openTabMenu() {
  

  if(!closeTab){
    setCloseTab(true);
    document.querySelector(".ulHeader").style.visibility = "visible";
    if(window.location.pathname !== "/"){
      
      if(window.innerWidth < 600){
        document.querySelector(".sqere").style.border = "solid 2px white";
        allSlice.map(el => el.style.background = "white")
        allSlice.map(el => el.style.height = "3px")
        }else{
          document.querySelector(".sqere").style.border = "solid 3px white";
          allSlice.map(el => el.style.background = "white")
        }
    }else{

      if(window.innerWidth < 600){
        allSlice.map(el => el.style.height = "3px")
        }
        document.querySelector(".sqere").style.border = "solid 3px #ff2020";
        allSlice.map(el => el.style.background = "#ff2020")
    }
    if(window.innerWidth < 940){
    document.querySelector("body").style.overflow = "hidden";

    document.querySelector(".ulHeader").style.marginTop = "-130px";
    document.querySelector(".ulHeader").style.paddingTop = "90px";
    document.querySelector(".ulHeader").style.height = "1200px";
    document.querySelector(".ulHeader").style.opacity = "1";}

  }else{
    setCloseTab(false);
    if(window.innerWidth < 940){document.querySelector(".ulHeader").style.visibility = "hidden";}

    if(window.location.pathname !== "/"){
      if(window.innerWidth < 600){
        document.querySelector(".sqere").style.border = "solid 2px #e5e5e5e8";
        allSlice.map(el => el.style.background = "#e5e5e5e8")
        allSlice.map(el => el.style.height = "3px")
        }else{
          document.querySelector(".sqere").style.border = "solid 3px #e5e5e5e8";
          allSlice.map(el => el.style.background = "#e5e5e5e8")
        }
    }else{

      if(window.innerWidth < 600){
        allSlice.map(el => el.style.height = "3px")
        }
        document.querySelector(".sqere").style.border = "solid 3px #ff2020d6";
        allSlice.map(el => el.style.background = "#ff2020d6")
    }
    document.querySelector("body").style.overflow = null;
    if(window.innerWidth < 940){
    document.querySelector(".ulHeader").style.marginTop = "-140px";
    document.querySelector(".ulHeader").style.paddingTop = "0px";
    document.querySelector(".ulHeader").style.height = "0px";
    document.querySelector(".ulHeader").style.opacity = null;}
    
  }
}




  return (
      <header>
        <div className="blockHeader">
          <div className="tabMobileMenu">
            <div className="sqere" onClick={openTabMenu}>
              <div className="slice_1 _slice"></div>
              <div className="slice_2 _slice"></div>
              <div className="slice_3 _slice"></div>
            </div>
          </div>
          <ul className="ulHeader">
            <li className="liMenuEl"><Link className="menuEl" onClick={() => setThisUrl("/")} to={"/"}>Головна</Link></li>
            <li className="liMenuEl"><Link className="menuEl" onClick={() => setThisUrl("/servis")} to={"/servis"}>Сервіс</Link></li>
            <li className="liMenuEl"><Link className="menuEl" onClick={() => setThisUrl("/garant")} to={"/garant"}>Гарантія</Link></li>
            <li className="liMenuEl"><Link className="menuEl" onClick={() => setThisUrl("/contact")} to={"/contact"}>Контакти</Link></li>
            <li className="liMenuEl"><a    className="menuEl _lastMenuEl" onClick={() => setThisUrl("/about")} tel="+380968961901" style={{cursor: "pointer"}}>+38(096)896-19-01</a></li>
          </ul>
        </div>
      </header>
      
  );
}

export default Header;
