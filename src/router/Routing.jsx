import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../views/Home';





export const Routing = () => {
    return (
      <BrowserRouter>
          <Routes>
            {/* Cargamos los componentes de la ruta pública en rutas anidadas*/}
            <Route path="/" element={<Home />}>
              {/* <Route index element={<Login />} />
              <Route path='login' element={<Login />} />
              <Route path='registro' element={<Register />} /> */}
            </Route>

            {/* Configuramos la ruta para el error 404 */}
            {/* <Route path="*" element={<Error404 />} />
   */}
          </Routes>
      </BrowserRouter>
    )
  }