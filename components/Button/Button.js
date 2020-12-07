import React from 'react';
import Router from 'next/router';

const button= (props) => {
    
    let className = `border-${props.borderWeight} font-${props.fontWeight} text-${props.textWeight} border-${props.borderColor} px-6 py-2 bg-${props.color} rounded-${props.roundedSize} text-white font-medium focus:outline-none`;

    return (
        <button className={className} onClick={props.click}>
            {props.buttonName}
        </button>
    )
}

button.defaultProps = {
    color: 'yellow-secondary',
    borderWeight: '0',
    borderColor: 'trasnsparent',
    click: () => {alert('Default Function Button')},
    roundedSize: 'xl',
    fontWeight: 'semibold',
    textWeight: 'sm'
}

export default button;