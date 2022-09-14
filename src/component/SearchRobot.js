const SearchRobot = (props) => {

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <input
          id="search-input"
          type="search"
          onChange={props.onChange}
          onKeyUp={props.onChange}
          className="form-control col-6 App-input"
          placeholder="Rechercher par le nom"
        />
      </div>
    </div>
  );
}

export default SearchRobot;
