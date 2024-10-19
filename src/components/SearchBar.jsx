const SearchBar = (props) => {
  const { handleSearch, input, setInput } = props;
  return (
    <div className="form d-flex justify-content-center align-items-center">
      <form className="d-flex mt-5 form-body" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
