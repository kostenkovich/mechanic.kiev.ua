import React from "react";

function SectionContactAbout() {
  return (
    <section>
        <div className="contactAbout">
          <div className="contactBlock">
            <div className="contact">
                <div className="infCon">
                    <div className="grafik">
                        <div className="nameGrafik _name_cont_gar">График работы механика:</div>
                        <ul className="grafikUl">
                            <li className="grafikLi _text_cont_gar">Пн-Пт: 09:00-19:00</li>
                            <li className="grafikLi _text_cont_gar">Сб: 10:00-15:00</li>
                            <li className="grafikLi _text_cont_gar">Вс: Выходной</li>
                        </ul>
                        <div className="nameTabGrafik _name_cont_gar" >Запись на сервис: </div>
                        <div className="grafikCall _text_cont_gar" >Пн-Вс: 09:00-21:00</div>
                    </div>
                    <div className="adress">
                        <div className="nameAdress _name_cont_gar">Адресс:</div>
                        <div className="textAdress _text_cont_gar">Дружбы Народов, Чешская 5А</div>
                    </div>
                    <div className="telephone">
                        <div className="nameTelephone _name_cont_gar">Контакты:</div>
                        <ul className="ulTelephone">
                            <li className="textTelephone _text_cont_gar">+38(096)896-19-01</li>
                            <li className="textTelephone _text_cont_gar">+38(050)343-34-34</li>
                        </ul>
                    </div>
                </div>
                
                
                
            </div>
          </div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.4802158835173!2d30.53904381526376!3d50.41352389790666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf41e7a41ae3%3A0xf7dc244c5ec3a328!2zNUEsINGD0LsuINCn0LXRiNGB0LrQsNGPLCA10JAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1680717325550!5m2!1sru!2sua"
                width="500" 
                height="500" 
                className="iframeMap"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className="backAboutContactGrou"></div>
    </section>
  );
}

export default SectionContactAbout;