import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../views/Home'
import Reservation from '..//components/Reservation/Reservation';
import Touristplans  from '../views/Touristplans';

export const Routing = () => {
    return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plans" element={<Touristplans />} />
        <Route path="/reservation" element={<Reservation />} />

      </Routes>
    </BrowserRouter>
    )
  }