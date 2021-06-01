import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Layout = ({children}) => {
    
    const title = "SavageJoan";
    
    return ( 
        <div>
            <Header />
            <div className="bg-black min-h-screen">
                
                    <main className="min-h-screen bg-black text-white py-6 px-2 xl:w-5/6 mx-auto">
                        {children}
                    </main>
                
            </div>
            
            <Footer
                title={title}
            />
        </div>
     );
}
 
export default Layout;