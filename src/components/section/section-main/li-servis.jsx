import React, {useContext} from "react";

function ServisLi(props) {
    

    let i = false;
        return <li className="servis" id={'servisId' + props.servis.id} onClick={
            (e) => {
                let elem = document.querySelector("#servisId" + props.servis.id).style.background;
                let elements = document.querySelectorAll(".servis");
                elements = [...elements];

                for(let i = 0; i < elements.length; i++)if(elements[i].style.background === "rgb(70, 70, 70)"){
                    elements[i].style.background = null; 
                    elements[i].style.color = "#131313"
                }

                if(elem === ""){

                    document.querySelector("#servisId" + props.servis.id).style.background = "rgb(70, 70, 70)";
                    document.querySelector("#servisId" + props.servis.id).style.color = "#efefef";
                
                    document.querySelector(".nameServis").innerHTML = "<span>Наименование обслуживания: </span>" + props.servis.name;
                    
                    if(props.servis.desc[1] === "min"){
                        document.querySelector(".timeServis").innerHTML = "<span>Длительность обслуживания: </span>" + props.servis.desc[0] + " " + props.servis.time + " минут";
                    }else if(props.servis.desc[1] === "hour"){
                        document.querySelector(".timeServis").innerHTML = "<span>Длительность обслуживания: </span>" + props.servis.desc[0] + " " + props.servis.time + " часов";
                    }else if(props.servis.desc[1] === "day"){
                        document.querySelector(".timeServis").innerHTML = "<span>Длительность обслуживания: </span>" + props.servis.desc[0] + " " + props.servis.time + " дней";
                    }else{document.querySelector(".timeServis").innerHTML = "<span>Длительность обслуживания: </span> " + props.servis.time}
                    
                    if(props.servis.desc[0] === "" && props.servis.desc[1] === "") return document.querySelector(".priseServis").innerHTML = "<span>Цена: </span> Неопределено";
                    document.querySelector(".priseServis").innerHTML = "<span>Цена: </span>" + props.servis.desc[0] + " " + props.servis.price + "грн";
                    return;
                }

                if(elem === "rgb(70, 70, 70)"){
                    
                    document.querySelector("#servisId" + props.servis.id).style.background = null;
                    document.querySelector("#servisId" + props.servis.id).style.color = "#131313"
                    
                    document.querySelector(".nameServis").innerHTML = "<span>Наименование обслуживания:</span> Выберите необходимую услугу";
                    document.querySelector(".timeServis").innerHTML = "<span>Длительность обслуживания: </span> Выберите необходимую услугу";
                    document.querySelector(".priseServis").innerHTML = "<span>Цена: </span> Неопределено";
                } 
            }
        }>{props.servis.name}</li>;
}

export default ServisLi;