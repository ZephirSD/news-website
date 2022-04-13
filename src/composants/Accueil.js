import planete from '../assets/planete_terre.png';

function Accueil() {
    return ( 
        <section className="grid-accueil1">
            <div className='planete'>
                <img src={planete} alt='planete' className='planete-img'></img>
            </div>
            <div className='case-title'>
                <h1 className='title-news'>news</h1>
                <p className='para-title'>Actualités en temps et en heures</p>
            </div>
        </section>
     );
}

export default Accueil;