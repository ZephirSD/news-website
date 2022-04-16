// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/style.scss";
import Accueil from "./composants/Accueil";
import Carte from "./composants/Carte";
import Autres from "./composants/Autres_Cases";
import Contact from "./composants/Contact";

class Site extends React.Component{
  render(){
    return(
      <>
        <Accueil />
        <Carte />
        <Autres />
      </>

    );
  }
}

function App() {
  return (
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }),
    (
      <>
        <Routes>
          <Route>
                <Route path="/" element={<Site/>} />
                <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </>
    )
  );
}

export default App;
