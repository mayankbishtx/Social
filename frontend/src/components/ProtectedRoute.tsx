import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import type { Props } from "../types";

export default function ProtectedRoute({ children }: Props) {
    const { accessToken } = useAuth();
    
    if (!accessToken) {
        return <Navigate to="/login" replace />
    }
    return children;
} 