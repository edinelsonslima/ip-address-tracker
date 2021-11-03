import { Search } from '../Search';
import './index.css';

const Header = () => {
    return (
        <header className='header-container'>
            <h1 className='header-title'>IP Address Tracker</h1>
            <Search />
        </header>
    );
};

export { Header };
