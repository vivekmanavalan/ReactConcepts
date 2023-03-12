import React from 'react';

const IncrementButton = (props) => {
    console.log('Increment button', props.children);
    return(
    <button onClick={props.handleClick}>{props.children}</button>
    )
}

export default React.memo(IncrementButton);