import android from "../assets/icone/icon_android.png";
import apple from "../assets/icone/icon_apple.png";
import { Link } from "react-router-dom";

function Autres() {
    return ( 
        <div className="padding-autres">
            <section className="case-final-accueil">
                <h1 className="titre-final-accueil">Et pleins d'autres</h1>
                <div className="case-bloc-interface">
                    <div className="case1"></div>
                    <div className="case2"></div>
                    <div className="case3"></div>
                </div>
            </section>
            <div className="application-case">
                <h2 className="titre-application">Disponible sur</h2>
                <div className="case-boutton-appli">
                    <div className="boutton-android">
                        <img src={android} alt="icone_android"/>
                    </div>
                    <div className="boutton-apple">
                        <img src={apple} alt="icone_apple"/>
                    </div>
                </div>
            </div>
            <div className="continue-case">
                <h3 className="titre-continue">Continuer vers</h3>
                <h1 className="text-contact"><Link to="/contact">contact</Link></h1>
            </div>
        </div>
     );
}

export default Autres;