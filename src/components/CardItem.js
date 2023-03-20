import React, { useState } from 'react';


function CardItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (event) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <li className={`cards__item${isExpanded ? ' cards__item--expanded' : ''}`}>
        {!isExpanded && (
          <div className='cards__item__link' onClick={handleCardClick}>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                className='cards__item__img'
                alt='Image'
                src={props.src}
              />
            </figure>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </div>
        )}
        {isExpanded && (
          <div className='cards__item__expanded' onClick={handleCardClick}>
            <p className='cards__item__paragraph'>{props.expandedText}</p>
          </div>
        )}
      </li>
    </>
  );
}

export default CardItem;
