import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import style from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Chesse', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    <div className={style.BuildControls}>
        <p>Current Price: <strong>€{props.price.toFixed(2)}</strong></p>
        {controls.map((control) => ( // Look at: why forEach doesn't work here???
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]} />
        ))}
        <button
            className={style.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;