import { Link } from "react-router-dom";
import { baseContact } from "../assets/base/baseContact";
import fleche from  "../assets/fleche_back.png";
import { Input,Textarea,Button } from "./Forms/Forms";

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
                    <form className="form-contact">
                        <Input label='Email' type='email' name={'email'}/>
                        <div className="grid-input-contact">
                            <Input label={'Nom'} type='text' name={'nom'}/>
                            <Input label={'Prenom'} type='text' name={'prenom'}/>
                        </div>
                        <Input label='Numéro de téléphone' type='tel' name={'telephone'}/>
                        <Textarea label={'Commentaire'} name={'commentaire'} maxLength="100"/>
                        <Button type={'button'} className="boutton-envoyer" name={'envoyer'} value={'Envoyer'}/>
                    </form>
                </div>
            </div>
        </>
     );
}

export default Contact;