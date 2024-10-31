// src/App.jsx
import React from 'react';
//Se debe agregar este componente una vez liste las ciudades
// import Login from './components/Login';
// import Home from './views/Home';
import Header from './components/Header';
import Touristplans from './views/Touristplans';

function App() {
  return (
    <div>
      {/* Vista inicial del aplicativo */} 
      
      <Header />
      <Touristplans/>
      {/* <Home /> */}
    </div>
  );
}

export default App;
