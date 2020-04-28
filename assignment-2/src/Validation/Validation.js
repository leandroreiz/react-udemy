import React from 'react';

const shortText = {color: "red"};
const longText = {color: "green"};

export default function validation(props) {
    if (props.textLength <= 10) {
        return <p style={shortText}>Text too short</p>
    }
    return <p style={longText}>Text long enough</p>
}
