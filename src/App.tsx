import { Card } from './components/Card';
import { Header } from './components/Header';
import { Maps } from './components/Map';
import { DataApiProvider } from './context/dataApi';

function App() {
    return (
        <DataApiProvider>
            <Header />
            <Card/>
            <Maps/>
        </DataApiProvider>
    );
}

export default App;
