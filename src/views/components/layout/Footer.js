import React from 'react';
import { styles } from './Styles';
import SocialNetworks from '../socialNetworks/SocialNetworks';

const Footer = ({ title }) => {
    const { footer, textFooter } = styles;

    const year = new Date().getFullYear();

    return (
        <footer className={footer}>
            <SocialNetworks /> 
            <p className={textFooter}>{title} | {year}</p>
            <p className={textFooter}>Joan Manuel Defelippe</p>
        </footer>
    
     );
}
 
export default Footer;