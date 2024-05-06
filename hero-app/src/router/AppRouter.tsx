import { Navigate, Route, Routes } from 'react-router-dom';
import { DCPage } from '../heros/pages/DCPage';
import { MarvelPage } from '../heros/pages/MarvelPage';
import { LoginPage } from '../auth/pages/LoginPage';
import { Navbar } from '../ui';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='marvel' element={<MarvelPage />}></Route>
                <Route path='dc' element={<DCPage />}></Route>

                <Route path='login' element={<LoginPage />}></Route>

                {/* Redirecciona un path a otra ruta haciendo uso del navigate  */}
                <Route path='/' element={<Navigate to="marvel" />}></Route>

                {/* Cuando no se encuentra una ruta, debe haber una default  */}
                <Route path='*' element={<MarvelPage />}></Route>
            </Routes>
        </>
    )
}