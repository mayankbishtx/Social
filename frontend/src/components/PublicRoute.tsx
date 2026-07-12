import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import type { Props } from "../types";

export default function PublicRoute({ children }: Props) {
    const { accessToken } = useAuth();

    if (accessToken) return <Navigate to="/home" replace />

    return children;
}