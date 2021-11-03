import { useContext, useEffect, useMemo, useState } from 'react';
import { DataApiContext } from '../../context/dataApi';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import './index.css';

const Maps = () => {
    const { dataIpResponse } = useContext(DataApiContext);
    const [center, setCenter] = useState([0, 0]);
    const [map] = useState(
        new Map({
            view: new View({
                center: center,
                zoom: 0,
            }),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: undefined,
        })
    );

    useMemo(() => {
        if (Object.entries(dataIpResponse).length > 0) {
            setCenter([dataIpResponse.lat, dataIpResponse.lon]);
            console.log();
            map.setProperties(center);
            map.getView().animate({ zoom: 5 }, { duration: 2000 });
        }
    }, [dataIpResponse]);

    useEffect(() => {
        map.setTarget('map');
    }, []);

    return <div id='map' className='map-container'></div>;
};
export { Maps };
