import React from 'react';

const Show = ({ Weather }) => {
    return (
        <>
            <ul>
                <li>{Weather.location.name}  {Weather.location.country} </li>
                <li>{Weather.current.temp_c}</li>
                <li>{Weather.current.feelslike_c}</li>
                <li><img src={Weather.current.condition.icon} />{Weather.current.condition.text} </li>
                <li>{Weather.current.humidity}</li>
                <li>{Weather.current.is_day}</li>
                <li>{Weather.current.pressure_in}</li>
                <li>{ }</li>
                <li>{ }</li>
                <li>{ }</li>
                <li>{ }</li>
                <li>{ }</li>
            </ul>
        </>);
};

export default Show;
