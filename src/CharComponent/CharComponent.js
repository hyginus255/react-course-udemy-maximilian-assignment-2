import React from 'react';
import './CharComponent.css';
import uuid from 'react-uuid';


const CharComponent = (props) => {
    
    let arrayText = props.text.split("");
    
    return (
        <div>
            {arrayText.map((text, index) => {
                return (
                    <div className="CharComponent" key={uuid()} onClick={() => props.clicked(index)}>
                        <p>{text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default CharComponent;