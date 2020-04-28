import React from 'react';

const cardStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid white"
}

export default function charsCard(props) {
    return (
        <div onClick={props.delete} style={cardStyle}>
            {props.char}
        </div> 
    );
}
