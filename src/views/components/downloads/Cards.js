import React from 'react';
import { styles } from './Styles';
import Card from './Card';

const Cards = ({ cards }) => {
    const { customContainer } = styles;

    return (
        <div className={customContainer}>
            {cards.map(card => 
                <Card card={card} />
            )}
        </div>
    );
}
 
export default Cards;