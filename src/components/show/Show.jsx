import React from 'react';
import { Card } from 'react-bootstrap'

const Show = ({ Weather }) => {
    return (
        <Card style={{ width: '18rem', height: '42.5rem' }}>
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
                    <div className='info'>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>feelslike</Card.Title></Card.Header>
                    <Card.Text>{Weather.current.feelslike_c}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>wind</Card.Title></Card.Header>
                    <Card.Text>{Weather.current.wind_kph}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>Wind&nbsp;dir</Card.Title></Card.Header>
                    <Card.Text>{Weather.current.wind_dir}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>humidity</Card.Title></Card.Header>
                    <Card.Text>{Weather.current.humidity}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>current</Card.Title></Card.Header>
                    <Card.Text>{Weather.current.is_day === 0 ? 'night' : 'day'}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>pressure</Card.Title></Card.Header>
                    <Card.Text>{Weather.current.pressure_in}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>sunrise</Card.Title></Card.Header>
                    <Card.Text>{Weather.forecast.forecastday[0].astro.sunrise}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>sunset</Card.Title></Card.Header>
                    <Card.Text>{Weather.forecast.forecastday[0].astro.sunset}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>maxtemp</Card.Title></Card.Header>
                    <Card.Text>{Weather.forecast.forecastday[0].day.maxtemp_c}</Card.Text>
                    </Card>
                    <Card style={{ width: '7.5rem' }}> 
                    <Card.Header><Card.Title>mintemp</Card.Title></Card.Header>
                    <Card.Text>{Weather.forecast.forecastday[0].day.mintemp_c}</Card.Text>
                    </Card>
                    </div>
                   
                </Card.Text>
            </Card.Body>
        </Card>);
};

export default Show;
