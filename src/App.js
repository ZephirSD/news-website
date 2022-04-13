// import logo from './logo.svg';
// import './App.css';
import './style/style.scss';
import Accueil from './composants/Accueil';
import Carte from './composants/Carte';
import Autres from './composants/Autres_Cases';

function App() {
  return (
    <div>
      <Accueil/>
      <Carte />
      <Autres/>
    </div>
  );
}

export default App;
