import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<TechProvider> <DashboardPage /> </TechProvider>} />
            </Route>
                 
        </Routes>
    )
}