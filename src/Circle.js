import React from 'react';
import "./Circle.css";

function Circle(){

    let Circle = {
          backgroundColor:"#E94F37",
          borderRadius: "50%",
          width:100,
          height:100,
          padding:30,
          display:"inline-block",
          scale: 1.25
    };

      return(
        <div className="center"style={Circle}>
            
        </div>
        );
};

export default Circle;