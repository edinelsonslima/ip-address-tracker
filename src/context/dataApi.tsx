import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from 'react';

type dataApiProvider = {
    children: ReactNode;
};

type dataApiContext = {
    dataIpResponse: DataIpAddressResponse;
    setDataIpResponse: Dispatch<SetStateAction<DataIpAddressResponse>>;
};

export type DataIpAddressResponse = {
    city: string;
    zip: string;
    countryCode: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    query: string;
};

const DataApiContext = createContext({} as dataApiContext);

const DataApiProvider = ({ children }: dataApiProvider) => {
    const [dataIpResponse, setDataIpResponse] = useState(
        {} as DataIpAddressResponse
    );

    return (
        <DataApiContext.Provider value={{ dataIpResponse, setDataIpResponse }}>
            {children}
        </DataApiContext.Provider>
    );
};

export { DataApiProvider, DataApiContext };
