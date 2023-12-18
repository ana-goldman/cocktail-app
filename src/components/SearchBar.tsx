import React from 'react';

type Props = {
  value: string;
  handleSearch: (e: React.SyntheticEvent) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = ({ value, handleSearch, handleChange }) => {
  return (
    <form onSubmit={handleSearch}>
      <label>Search</label>
      <input
        type="text"
        placeholder="type here..."
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
