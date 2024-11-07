// src/App.jsx
import React from 'react';
//Se debe agregar este componente una vez liste las ciudades
// import Login from './components/Login';
// import Home from './views/Home';
import Header from './components/Header';
import Touristplans from './views/Touristplans';
import { Routing } from "./router/Routing";

function App() {
  return (
    <div>
      {/* Vista inicial del aplicativo */} 
      <Routing />
      {/* <Header />
      
      <Touristplans/> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
