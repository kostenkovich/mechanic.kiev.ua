import React, {useEffect} from "react";

function SectionMain() {

  useEffect(() => {

    if(window.innerWidth < 650){
      document.querySelector(".imgSectionBlock_2").style.position = "sticky";
      document.querySelector(".imgSectionBlock_2").style.marginLeft = "0%";
      document.querySelector(".imgSectionBlock_2").style.zIndex = "3";
      document.querySelector(".imgSectionBlock_2").style.boxShadow = "0 0 10px black";
    }
    if(window.innerWidth < 650){
      document.querySelector(".textBlockName").style.margin = "30px 50px 20px 0px";
    }else{
      document.querySelector(".textBlockName").style.margin = "30px 50px 20px -5px";
    }
    document.querySelector(".textBlockName").style.opacity = "1";
    document.querySelector(".textBlockText").style.opacity = "1";

    setTimeout(() => {
      if(window.innerWidth < 650){
        document.querySelector("#textBlockName_2").style.margin = "30px 50px 20px 0px";
      }else{
        document.querySelector("#textBlockName_2").style.margin = "30px 50px 20px 50px";
      }
    document.querySelector("#textBlockName_2").style.opacity = "1";
    document.querySelector("#textBlockText_2").style.opacity = "1";
    }, 700)

    let infPx = document.querySelector("#block_1").offsetHeight;
    console.log(infPx)
    document.querySelector("#triugol_1").style.borderTop = infPx + 80 + "px solid #eded16";
  }, [])

  return (
    <section>

      <div className="aboutMain">
          <div className="logoMain"> <div className="text">| MECHANIC |</div></div>
          <div className="logoWords"><div className="text">Просто,  Быстро,  Напрямую!</div></div>
          <div className="backSecMain"></div>
        </div>
        <div className="blockPlace">
          <div className="workHourMain">Работаем для вас! <div className="span">С 09:00 до 19:00</div></div>
          <div className="placeMain">Где?<div className="span"> м. Дружбы Народов, Чешская 5А</div></div>
        </div>

        <div className="block_1" id="block_1">
            <div className="imgSectionBlock"></div>
            <div className="description">
                <div className="triugol" id="triugol_1"></div>
                <div className="backMainSecGround"></div>
                <div className="textBlockName"> Механик:</div>
                <div className="textBlockText">Забудь о проблемах с автомобилем! Забудь о долгих комуникациях, разговорах не по делу и бездонных наценок, теперь все будет напрмую! Узнай что с твоим любимым автомобилем сразу после диагностики. Больше никаких упущеных моментов, тайн и "испорченого телефона"! Только качественное обслуживание!</div>
            </div>
        </div>
        <div className="block_1" style={{zIndex: "1"}}>
            <div className="imgSectionBlock imgSectionBlock_2" style={{position: "absolute", marginLeft: "50%"}}></div>
            <div className="description" style={{marginLeft: "0"}}>
                <div className="triugol" style={{left: "calc(100% - 200px)", bottom:" inherit", transform: "none"}}></div>
                <div className="backMainSecGround"></div>
                <div className="textBlockName" id="textBlockName_2">Скорость?</div>
                <div className="textBlockText" id="textBlockText_2">Это скорость. Много работ, а машина нужна уже завтра? Без вопросов! В 09:00 ты уже на необходимой встрече. Так же Механик дает гарантию как на запчасти, так и на работы, а запчастист посоветует лучшие детали для твоего автомобиля. Звони! И становись следующим постоянным клиентом!</div>
            </div>
        </div>
    </section>
  );
}

export default SectionMain;