import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import type { Props } from "../types";
import Loading from "./Loading";

export default function ProtectedRoute({ children }: Props) {
    const { accessToken, authLoading } = useAuth();

    if (authLoading) return <Loading/>
    
    if (!accessToken) {
        return <Navigate to="/login" replace />
    }
    return children;
} 