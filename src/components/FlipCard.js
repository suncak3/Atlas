import React, { useState } from 'react';
import '../styles/FlipCard.css';

const FlipCard = ({
                      frontContent,
                      backContent,
                      frontImage,
                      frontImageAlt = "Card front"
                  }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Стили для фонового изображения, если оно предоставлено
    const frontStyle = frontImage ? {
        backgroundImage: `url(${frontImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } : {};

    return (
        <div
            className="flip-card"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front" style={frontStyle}>
                    {frontContent}
                </div>
                <div className="flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;