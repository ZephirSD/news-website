import { baseAccueil } from "../assets/base/baseAccueilNews";
import deviceIphone from "../assets/device-iphone.png";
function Carte() {
  return (
    <div className="padding-carte">
        {baseAccueil.map((base,index) => (
            <section className="grid-carte" key={index}>
              <div className="case-carte-left">
                <h1 className="titre-carte" data-aos="fade-up">{base.titre}</h1>
                <p className="texte-carte" data-aos="fade-up">{base.texte}</p>
              </div>
              <div className="case-carte-right">
                <div className="case-iphone" data-aos="zoom-in" style={{backgroundImage: `url(${base.url_image_phone})`}}>
                  <img
                    src={deviceIphone}
                    alt="device-iphone"
                    className="device-iphone"
                  />
                </div>
              </div>
            </section>
        ))}
    </div>
  );
}

export default Carte;
