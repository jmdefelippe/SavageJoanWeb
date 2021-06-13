import React from 'react';
import { styles } from './Styles';
import Card from './Card';
import Pagination from '../pagination/Pagination';

const Cards = ({ cards }) => {
    const { customContainer } = styles;
    const totalItems = 50;

    return (
        <div>
            <div className={customContainer}>
                {cards.map(card => 
                    <Card card={card} />
                )}
            </div>
            <Pagination totalItems={totalItems} />
        </div>
    );
}
 
export default Cards;