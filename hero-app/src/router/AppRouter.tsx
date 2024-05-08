import { Navigate, Route, Routes } from 'react-router-dom';
import { HerosRoutes } from '../heros';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/auth/*' element={
                    <PublicRoutes>
                        <AuthRoutes />
                    </PublicRoutes>
                } />

                {/* Cuando no se encuentra una ruta, debe haber una default  */}
                <Route path='/*' element={
                    <PrivateRoutes>
                        <HerosRoutes />
                    </PrivateRoutes>
                } />

            </Routes>
        </>
    )
}


export const PrivateRoutes = ({ children }: { children: any }) => {

    const { logged } = useContext(AuthContext);

    return (logged)
        ? children
        : <Navigate to={'/auth/login'} />
}

export const PublicRoutes = ({ children }: { children: any }) => {

    const { logged } = useContext(AuthContext);

    return (!logged)
        ? children
        : <Navigate to={"/"} />;
}