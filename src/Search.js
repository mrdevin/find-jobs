const Search = (props) => {
  const allJobs = props.jobs;
  let keywords = [];

  return (
    <div>
      <input type="search"></input>
      <button>Filter</button>
    </div>
  );
};

export default Search;