import React from 'react';

import cardStyles from './card.module.scss';

const Card = () => {
  return (
    <div className={cardStyles.card}>
      <h1>Title Card</h1>
      <h2 className={cardStyles.h2}>Title Card 2</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam beatae cumque suscipit autem minima dicta asperiores aperiam molestias soluta? Nihil.</p>
      <button>Button Card</button>
    </div>
  );
};

export default Card;