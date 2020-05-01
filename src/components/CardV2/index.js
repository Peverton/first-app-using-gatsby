import React from 'react';

import { CardV2Wrapper } from './styles';
import Images from '../Images';

const CardV2 = props => {
  return (
    <CardV2Wrapper 
      className="card" 
      backgroud={props.backgroudCard}
      primary={props.styleDefault}
    >
      <Images name={props.nameImage} />
      <div className="card-body">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
        <a href="#" className={`btn btn-${props.colorButton}`}>Visitar</a>
      </div>
    </CardV2Wrapper>
  );
};

export default CardV2;