import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: "PropertyPulse | Find The Perfect Rental",
    description: "find your dream rental property",
    keywords: "rental, property"
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
        <html lang = 'en'>
            <body>
                <Navbar/>
                <div>
                    {children}
                </div>
                <Footer></Footer>
            </body>
        </html>
    </AuthProvider>
  )
};

export default MainLayout
