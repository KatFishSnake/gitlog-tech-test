import { useState } from "react";
// import { debounce } from "lodash";

const Filter = ({ onQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Would be this if proposed changes accepted
   */
  // const onSearchDebounced = useCallback(
  //   debounce((e) => {
  //     onQuery(e.target.value);
  //   }, 500),
  //   [onQuery]
  // );

  // const handleSearch = (event) => {
  //   event.persist();
  //   setSearchQuery(event.target.value);
  //   onSearchDebounced(event);
  // };

  const handleSearch = () => {
    onQuery(searchQuery);
  };

  return (
    <div className="w-full h-16 p-4 text-md bg-grey-200 z-1 shadow-md z-1">
      <input
        type="search"
        name="commitquery"
        className="py-1 text-sm focus:outline-none border border-grey-300"
        autoComplete="off"
        placeholder="Filter by commit message…"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Filter</button>
    </div>
  );
};

export default Filter;
