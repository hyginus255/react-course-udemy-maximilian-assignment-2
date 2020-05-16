import React from 'react';


const ValidationComponent = (props) => {
    let validation = "";
    props.length <= 5 ? validation = "Text too short" : validation = "Text Long Enough"; 
    return (
        <p>{validation}</p>
    )
}

export default ValidationComponent;