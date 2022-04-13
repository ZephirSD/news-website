import {baseAccueil} from "../assets/base/baseAccueilNews";
import deviceIphone from "../assets/device-iphone.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import interfaceNetwork from "../assets/interface_network.png";
function Carte() {
    return ( 
        <div className="padding-carte">
            <Swiper
                direction="horizontal"
                spaceBetween={10}
            >
                {baseAccueil.map((base) => (
                    <SwiperSlide>
                        <section className="grid-carte">
                            <div className="case-carte-left">
                                <h1 className="titre-carte">{base.titre}</h1>
                                <p className="texte-carte">{base.texte}</p>
                            </div>
                            <div className="case-carte-right">
                                <div className="case-iphone">
                                    <img src={deviceIphone} alt="device-iphone" className="device-iphone"/>
                                </div>
                            </div>
                        </section> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carte;