'use client';
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({children}) => {
    return (
        <SessionProvider>AuthProvider {children}</SessionProvider>
    )
}

export default AuthProvider;