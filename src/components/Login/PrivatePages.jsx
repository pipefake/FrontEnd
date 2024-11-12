import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header"
import useAuth from '../../hooks/useAuth';

export const PrivatePages = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <>
                {/* Cabecera y navegación*/}
                <Header />

                {/* Contenido Principal */}
                <section className='layout__content'>
                    {auth._id ?
                        <Outlet />
                        :
                        <Navigate to="/" />
                    }
                </section>

            </>
        );
    }
}