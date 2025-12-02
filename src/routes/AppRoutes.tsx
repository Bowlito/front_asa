// AppRoutes.tsx

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Register from "../pages/Register";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/users" element={<Users/>}/>

            {/* Cette Route doit tout le temps être en fin de bloc */}
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    )
}