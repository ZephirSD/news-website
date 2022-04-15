import { baseAccueil } from "../assets/base/baseAccueilNews";
import deviceIphone from "../assets/device-iphone.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
// import interfaceNetwork from "../assets/interface_network.png";
function Carte() {
  return (
    <div className="padding-carte">
      {/* <Swiper
        direction={"vertical"}
        spaceBetween={0}
        slidesPerView={1}
        effect={"fade"}
        // mousewheel={true}
        mousewheel={{
          forceToAxis: true,
        }}
        modules={[Mousewheel]}
      > */}
        {baseAccueil.map((base) => (
        //   <SwiperSlide>
            <section className="grid-carte">
              <div className="case-carte-left">
                <h1 className="titre-carte" data-aos="fade-up">{base.titre}</h1>
                <p className="texte-carte" data-aos="fade-up">{base.texte}</p>
              </div>
              <div className="case-carte-right">
                <div className="case-iphone" data-aos="zoom-in">
                  <img
                    src={deviceIphone}
                    alt="device-iphone"
                    className="device-iphone"
                  />
                </div>
              </div>
            </section>
        //   </SwiperSlide>
        ))}
      {/* </Swiper> */}
    </div>
  );
}

export default Carte;
