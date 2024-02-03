import React from "react";
import Data from "./Data";
import ImageContent from "./ImageContent";


function ImageComponentCard() {
  console.log(Data);
  return (
    <div >
        {Data.map((card, index) => (
          <ImageContent
              key={index}
              id={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
        
        ))}
      
    </div>
  );
}

export default ImageComponentCard;
