import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { styles } from './Styles';

const Header = () => {
    const { header, headerLinkActive, headerLinkInactive, headerMenuVisible, headerMenuHidden } = styles;

    const links = [
        { text: "Inicio", url: "/" },
        { text: "Discografía", url: "/discografia" },
        { text: "Descargas", url: "/descargas" },
/*        
        { text: "Screen Tabs", url: "/screenTabs" },
        { text: "Tutoriales", url: "/tutoriales" },
        { text: "Backing Tracks", url: "/backingTracks" },
*/      
        { text: "Videos", url: "/videos" },        
        { text: "Fotos", url: "/fotos" },
        { text: "Contacto", url: "/contacto" },
    ];

    const location = useLocation();

    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenuVisible = () => setMenuVisible(!menuVisible);

    const menuClass = menuVisible ? headerMenuVisible : headerMenuHidden;

    return (
        <div className={header}>
            <div className="block lg:hidden">
                <button
                    id='button'
                    className="flex items-center px-3 py-2 mr-10 border rounded text-white border-white hover:text-black hover:border-black"
                    onClick={toggleMenuVisible}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            
            <div className={menuClass}>
                {links.map((link) => (
                    <Link key={link.text} to={link.url} my={4} mx={8}>
                        <a className={location.pathname === link.url
                            ? `${headerLinkActive}`
                            : `${headerLinkInactive}`
                        }>{link.text}</a>
                    </Link>
                ))}
            </div>
        </div>
    );
}
 
export default Header;