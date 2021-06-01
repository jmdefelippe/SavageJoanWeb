import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { styles } from './Styles';

const Header = () => {
    const { header, headerLinkActive, headerLinkInactive } = styles;

    const links = [
        { text: "Inicio", url: "/" },
        { text: "Discografía", url: "/discografia" },
        { text: "Descargas", url: "/descargas" },
        
        { text: "Screen Tabs", url: "/screenTabs" },
        { text: "Tutoriales", url: "/tutoriales" },
        { text: "Backing Tracks", url: "/backingTracks" },
        
        { text: "Videos", url: "/videos" },        
        { text: "Fotos", url: "/fotos" },
        { text: "Contacto", url: "/contacto" },
    ];

    const location = useLocation();

    return (
        <div className={header}>
            {links.map((link) => (
                <Link key={link.text} to={link.url} my={4} mx={8}>
                    <a className={location.pathname === link.url
                        ? `${headerLinkActive}`
                        : `${headerLinkInactive}`
                    }>{link.text}</a>
                </Link>
            ))}
        </div>
    );
}
 
export default Header;