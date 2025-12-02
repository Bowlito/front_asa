// AppRoutes.tsx

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>

            {/* Cette Route doit tout le temps être en fin de bloc */}
            <Route path="*" element={<Navigate to="/" replace/>}></Route>
        </Routes>
    )
}