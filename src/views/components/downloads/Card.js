import React from 'react';
import { styles } from './Styles';

const Card = ({ card }) => {
    const { customCardContainer, customH1, customA } = styles;
    const { artist, song, urlImage, urlVideo, urlGuitarPro, urlPdf, tuning } = card;

        return (
        <div className={customCardContainer}>
            <a href={urlVideo} target="_blank">    
                <img className="mb-2" src={urlImage}></img>
            </a>
            <h1 className={customH1}>{artist} - {song}</h1>
            <a href={urlGuitarPro} target="_blank" className={customA}>Guitar Pro</a>
            <a href={urlPdf} target="_blank" className={customA}>PDF</a>
        </div>
    );
}
 
export default Card;