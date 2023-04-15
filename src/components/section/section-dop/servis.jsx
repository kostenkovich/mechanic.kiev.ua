import React, {useContext, useEffect} from "react";

import ServisLi from "../section-main/li-servis";



function SectionServis(props) {

    
    
console.log(window.location.pathname)
  return (
    
        <div className="servisFun">
            <div className="panelServis">
            <div className="backGrServis"></div>
            <div className="nameServis"><span>Наименование обслуживания:</span> Выберите необходимую услугу</div>
            <div className="timeServis"><span>Длительность обслуживания: </span>Выберите необходимую услугу</div>
            <div className="priseServis"><span>Цена:</span> Неопределено</div>
            <div className="callBack">Записаться<div className="after">Записаться</div></div>
            </div>
            <ul className="ulServisFun">
            { 
                props.servis.map(li => <ServisLi servis={li}/>)
            }
            <li className="servis" style={{visibility: "hidden"}}>fbyebfn</li>
            </ul>
        </div>
  );
}

export default SectionServis;