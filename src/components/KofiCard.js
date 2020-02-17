import React from 'react';

const KofiCard = ({image, title, paragraph}) => {
    return (
        <div className='PTC-container'>
            <div className='PTC-img'>
                <img src={image} alt={paragraph} className='img-fluid mx-auto'/>
            </div>
            <div className='PTC-body mt-3'>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    );
}
 
export default KofiCard;