import React from 'react';
import '@/assets/styles/globals.css';

export const metadata = {
    title: "PropertyPulse | Find The Perfect Rental",
    description: "find your dream rental property",
    keywords: "rental, property"
};

const MainLayout = ({ children }) => {
  return (
    <html lang = 'en'>
        <body>
            <div>
                {children}
            </div>
        </body>
    </html>
  )
};

export default MainLayout
