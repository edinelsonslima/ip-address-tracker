import { useContext, useMemo, useState } from 'react';
import { DataApiContext } from '../../context/dataApi';
import './index.css';

const Card = () => {
    const { dataIpResponse } = useContext(DataApiContext);
    const [ip, setIp] = useState('0.0.0.0');
    const [location, setLocation] = useState('City, Country, Zip');
    const [timezone, setTimezone] = useState('UC -05:00');
    const [isp, setIsp] = useState('Google LLC');

    useMemo(() => {
        if (Object.entries(dataIpResponse).length > 0) {
            setIp(dataIpResponse.query);
            setLocation(
                `${dataIpResponse.city}, ${dataIpResponse.countryCode}, ${dataIpResponse.zip}`
            );
            setTimezone(dataIpResponse.timezone);
            setIsp(dataIpResponse.isp);
        }
    }, [dataIpResponse]);

    return (
        <div className='card-content'>
            <div className='card-container'>
                <div className='card'>
                    <p className='card-sub-title'>IP ADDRESS</p>
                    <p className='card-info'>{ip}</p>
                    <span className='card-line'></span>
                </div>
                <div className='card'>
                    <p className='card-sub-title'>LOCATION</p>
                    <p className='card-info'>{location}</p>
                    <span className='card-line'></span>
                </div>
                <div className='card'>
                    <p className='card-sub-title'>TIMEZONE</p>
                    <p className='card-info'>{timezone}</p>
                    <span className='card-line'></span>
                </div>
                <div className='card'>
                    <p className='card-sub-title'>ISP</p>
                    <p className='card-info'>{isp}</p>
                </div>
            </div>
        </div>
    );
};

export { Card };
