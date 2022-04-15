// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './style/style.scss';
import Accueil from './composants/Accueil';
import Carte from './composants/Carte';
import Autres from './composants/Autres_Cases';

function App() {
  return (
      useEffect(() => {
      AOS.init();
      AOS.refresh();
    }),   
    <>
      {/* <div className='cursor-move'></div> */}
      <Accueil/>
      <Carte />
      <Autres/>
    </>
  );
}

export default App;

// let cursorMouse = document.querySelector('.cursor-move');
// window.addEventListener('mousemove',moveCursor);

// function moveCursor(e){
//   cursorMouse.style.top = e.pageY + 'px';
//   cursorMouse.style.left = e.pageX + 'px';
// }

