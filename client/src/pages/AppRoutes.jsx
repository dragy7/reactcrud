import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import CarCreateForm from "./CarCreateForm/CarCreateForm";
import CarUpdateForm from "./CarUpdateForm/CarUpdateForm";
import CarList from "./CarList/CarList";
import CarView from "./CarView/CarView";
import CreatedCar from "./CarCreateForm/CreatedCar";


export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/createcar" element={<CarCreateForm />} />
                <Route path="/updatecar/:id" element={<CarUpdateForm />} />
                <Route path="/cars" element={<CarList />} />
                <Route path="/car/:id" element={<CarView />} />
                <Route path="/createdcar/:id" element={<CreatedCar />} />
                
            </Routes>
        </BrowserRouter>
    )
}