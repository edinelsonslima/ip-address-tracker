import { useContext, useState } from 'react';
import { DataApiContext, DataIpAddressResponse } from '../context/dataApi';
import { apiIp } from '../service/api';

const useSearch = () => {
    const { setDataIpResponse } = useContext(DataApiContext);
    const [valueInput, setValueInput] = useState('');

    async function handleIpAddress() {
        const { data } = await apiIp.get<DataIpAddressResponse>(`${valueInput}`);
        setDataIpResponse(data);
    }

    return { setValueInput, valueInput, handleIpAddress };
};
export { useSearch };
