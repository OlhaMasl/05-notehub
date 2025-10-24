import css from './SearchBox.module.css';

interface SearchBoxProps {
    onSearch: (search: string) => void,
    inputValue: string
};

const SearchBox = ({ onSearch, inputValue}: SearchBoxProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
     };
    return (
        <input
            className={css.input}
            type="text"
            defaultValue={inputValue}
            placeholder="Search notes"
            onChange={handleChange}
        />
    )
};

export default SearchBox