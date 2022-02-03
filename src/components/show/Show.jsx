import React from 'react';
import { Card } from 'react-bootstrap'

const Show = ({ Weather }) => {
    return (
        //         <Card style={{ width: '18rem' }}>
        //   <Card.Img variant="top" src="holder.js/100px180" />
        //   <Card.Body>
        //    
        //     <Card.Text>
        //       Some quick example text to build on the card title and make up the bulk of
        //       the card's content.
        //     </Card.Text>
        //     <Button variant="primary">Go somewhere</Button>
        //   </Card.Body>
        // </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>
                    <Card.Title>
                        <span>
                            {Weather.location.name}
                        </span>&nbsp;&nbsp;
                        <span>
                            {Weather.location.country}
                        </span>
                        <br />
                        <span>
                            {Weather.current.condition.text}
                        </span>
                        <img src={Weather.current.condition.icon} alt='icon' />
                        <br />
                        <span>{Weather.current.temp_c}</span>
                    </Card.Title>
                </Card.Header>

                <Card.Text>
                    <div style={{ display: 'flex', overflow: 'auto', width: '16rem', height: '7rem' }}>
                        {Weather.forecast.forecastday[0].hour.map((time, index) => {

                            return <p style={{ display: 'flex', gap: '15px', alignItems: 'center' }} key={index}>&nbsp;&nbsp; {time.temp_c}&nbsp;&nbsp;<img key={index} src={time.condition.icon} alt='icon' />&nbsp;&nbsp;{time.condition.text} </p>

                        })}  </div>
                    <p>{Weather.current.feelslike_c}</p>
                    <p>{Weather.current.wind_kph}</p>
                    <p>{Weather.current.wind_dir}</p>
                    <p> </p>
                    <p>{Weather.current.humidity}</p>
                    <p>{Weather.current.is_day}</p>
                    <p>{Weather.current.pressure_in}</p>
                    <p>{Weather.forecast.forecastday[0].astro.sunrise}</p>
                    <p>{Weather.forecast.forecastday[0].astro.sunset}</p>
                    <p>{Weather.forecast.forecastday[0].day.maxtemp_c}</p>
                    <p>{Weather.forecast.forecastday[0].day.mintemp_c}</p>


                </Card.Text>
            </Card.Body>
        </Card>);
};

export default Show;
