import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HerosRoutes } from '../heros';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<LoginPage />}></Route>

                {/* Cuando no se encuentra una ruta, debe haber una default  */}
                <Route path='/*' element={<HerosRoutes />}></Route>

            </Routes>
        </>
    )
}