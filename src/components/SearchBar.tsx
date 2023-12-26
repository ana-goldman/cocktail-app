import React from 'react';

type Props = {
  value: string;
  onSubmit?: (e: React.SyntheticEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  withBtn: boolean;
};

const SearchBar: React.FC<Props> = ({ value, onSubmit, onChange, withBtn }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Search</label>
      <input
        type="text"
        placeholder="type here..."
        value={value}
        onChange={onChange}
      />
      {withBtn && <button type="submit">Search</button>}
    </form>
  );
};

export default SearchBar;
