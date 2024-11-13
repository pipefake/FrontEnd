import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../views/Home';
import { PrivatePages } from '../components/Login/PrivatePages';
import Reservation from '../components/Reservation/Reservation';
import Touristplans from '../views/Touristplans';
import { Publicar } from '../views/Publicar';
import { Perfil } from '../views/Perfil';
import { Reservas } from '../views/Reservas';
import DetailToristPlan from '../components/touristPlan/DetailToristPlan';
import { AuthProvider } from '../context/AuthProvider';
import { Error404 } from '../components/Error404';
import { PublicPages } from '../components/Login/PublicPages';

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={ <PublicPages />}>
            <Route index element={<Home />} />
            <Route path="plans/:cityId" element={<Touristplans />} />
            <Route path="plan/detail/:touristPlanId" element={<DetailToristPlan />} />
          </Route>
          {/* Private Routes */}
          <Route path="/my-account" element={<PrivatePages />}>
            <Route path="perfil" element={<Perfil />} />
            <Route path="publicar" element={<Publicar />} />
            <Route path="reservas" element={<Reservas />} />
          </Route>

          {/* Configuramos la ruta para el error 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
