import React from 'react';

type Props = {
  value: string;
  onSubmit: (e: React.SyntheticEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Search</label>
      <input
        type="text"
        placeholder="type here..."
        value={value}
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
