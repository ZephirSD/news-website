import { Link } from "react-router-dom";
import { baseContact } from "../assets/base/baseContact";
import fleche from  "../assets/fleche_back.png";

function Contact() {
    return ( 
        <>
            <div className="nav-contact">
                <img src={fleche} alt="fleche_back"/>
                <h2 className="return-accueil"><Link to="/">acccueil</Link></h2>
            </div>
            <div className="case-contact">
                <h1 className="title-contact">contact</h1>
                <div className="padding-info-form">
                    <div className="grid-image-info">
                        {
                            baseContact.map((contact,index)=>(
                                <div className="grid_image" key={index}>
                                    <img src={contact.image_url} alt="mail_icon"/>
                                    <p>{contact.texte}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default Contact;