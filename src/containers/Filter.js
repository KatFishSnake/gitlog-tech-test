import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "twin.macro";

import { sizes } from "../style-vars";

const SearchField = styled.input`
  width: 100%;
  ${tw`py-1 text-xs focus:outline-none border border-gray-300 pl-3 pr-1 mr-2 h-7 align-top`}
  
  @media ${sizes.md} {
    max-width: 300px;
  }
`;

const SearchTriggerButton = styled.button`
  background: linear-gradient(180deg, #faf2f2 0%, #ede5e5 100%);
  border: 1px solid #d0cccc;
  ${tw`px-6 text-xs py-1 h-7 align-top`}
`;

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // On clear bypass the confirm flow
    if (event.target.value.length === 0) onQuery("");
  };

  const handleFilterConfirm = () => {
    onQuery(searchQuery);
  };

  return (
    <div className="w-full h-16 px-4 text-md bg-l-gray flex items-center flex-none">
      <SearchField
        type="search"
        name="commitquery"
        autoComplete="off"
        placeholder="Filter by commit message…"
        value={searchQuery}
        onChange={(e) => {
          handleSearch(e);
        }}
      />
      <SearchTriggerButton onClick={handleFilterConfirm}>
        Filter
      </SearchTriggerButton>
    </div>
  );
};

Filter.propTypes = {
  onQuery: PropTypes.func,
};

export default Filter;
