import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, MarvelPage } from "../pages"


export const HerosRoutes = () => {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path='marvel' element={<MarvelPage />}></Route>
                <Route path='dc' element={<DCPage />}></Route>

                <Route path='/' element={<Navigate to="marvel" />}></Route>

            </Routes>
        </>
    )
}