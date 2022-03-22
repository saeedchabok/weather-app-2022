import React from 'react';
import { Card, Container } from 'react-bootstrap';
import moment from 'moment';
import Moment from 'react-moment';

const Show = ({ Weather }) => {
    const CurrentDate = () => {
        const currentDateTime = moment()
        return (
            <Moment format='D MMM YYYY'>{currentDateTime}</Moment>
        )
    } 
    const hour = (input) => 
    {
        return (
            <Moment format="HH">{input}</Moment>
        )
    } 
    const currentDateTime = moment()
    console.log('ggg',hour(new Date()))
    return (
        <Container>
        <Card style={{ width: '19rem', height: '48.5rem', backgroundColor: 'lightgray' }}>
            <Card.Body>
                <Card.Header style={{backgroundColor: '#B6B6B6'}}>
                    <Card.Title>
                        <div className='styleMainCardTitle'>
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
                        <br />
                        <img src={Weather.current.condition.icon} alt='icon' />
                        <br />
                        <span>temp {Weather.current.temp_c}</span>
                        </div>
                    </Card.Title>
                </Card.Header>
                <Card.Text>
                    <div style={{ display: 'flex', overflow: 'auto', width: '17rem', height: '8rem', alignItems: 'center', justifyContent: 'start'}}>
                        {Weather.forecast.forecastday[0].hour.map((time, index) => 
                        {
                           if( parseInt(moment(time.time).format('HH'))   >= parseInt(currentDateTime.format('HH')))
                           {
                            return (<p style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} key={index}>
                            {
                            parseInt(moment(time.time).format('HH')) === parseInt(currentDateTime.format('HH')) ? 'Now' : hour(time.time)}
                            <img key={index} src={time.condition.icon} alt='icon' style={{width: '3rem'}} />
                            &nbsp;&nbsp; {time.temp_c.toFixed(0)}
                            </p>)
                           }
                           else
                           {
                              return null 
                           }
                        })}  </div>
                    <p className='date'>{ CurrentDate() }</p>
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
        </Card>
        </Container>
    );
};

export default Show;
