import React from 'react';

type Props = {
  value: string;
  onSubmit?: (e: React.SyntheticEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  withBtn: boolean;
};

const SearchBar: React.FC<Props> = ({ value, onSubmit, onChange, withBtn }) => {
  return (
    <form className="pt-6 pb-8 mb-4 space-y-2" onSubmit={onSubmit}>
      <label className="block text-lg font-bold mb-2">Search</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        type="text"
        placeholder="type here..."
        value={value}
        onChange={onChange}
      />
      {withBtn && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
          type="submit"
        >
          Search
        </button>
      )}
    </form>
  );
};

export default SearchBar;
