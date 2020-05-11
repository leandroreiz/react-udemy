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
        {controls.map((control) => (
            <BuildControl key={control.type} label={control.label}/>
        ))}
    </div>
);

export default buildControls;