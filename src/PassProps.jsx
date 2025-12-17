import React from 'react';

function PassProps(props)
{
    const {title, setTitle, message, setMessage} = props;
    return (
        <div>
            <title>{props.title}</title>
            <p>{props.message}</p>
        </div>
    )
}

export default PassProps;