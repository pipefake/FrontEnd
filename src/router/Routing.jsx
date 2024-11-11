import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../views/Home'
import Reservation from '..//components/Reservation/Reservation';
import Touristplans  from '../views/Touristplans';
import { Publicar } from '../views/Publicar';
import { Perfil } from '../views/Perfil';
import { Reservas } from '../views/Reservas';

export const Routing = () => {
    return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plans" element={<Touristplans />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/reservas" element={<Reservas />} />

      </Routes>
    </BrowserRouter>
    )
  }