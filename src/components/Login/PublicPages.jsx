import { Outlet } from "react-router-dom";
import Header from "../Header";

export const PublicPages = () => {
  return (
    <>
      {/* Cabecera y Navegación Pública */}
      <Header />

      {/* Contenido Principal */}
      <section className='layout__content'>
          <Outlet />
      </section>
    </>
  );
};