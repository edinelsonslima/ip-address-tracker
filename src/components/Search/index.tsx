import { IconArrow } from '../../assets/icon-arrow';
import { useSearch } from '../../hooks/useSearch';
import './index.css';

const Search = () => {
    const { valueInput, setValueInput, handleIpAddress } = useSearch();
    return (
        <div className='search-container'>
            <input
                type='text'
                value={valueInput}
                onChange={(e) => {
                    setValueInput(e.target.value);
                }}
                placeholder='Search for any IP address or domain'
                className='search-input'
            />
            <div className='search-arrow' onClick={handleIpAddress}>
                <IconArrow />
            </div>
        </div>
    );
};

export { Search };
