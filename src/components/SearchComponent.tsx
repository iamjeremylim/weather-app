import React from "react";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import SearchProvider from "./SearchProvider";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchComponent = () => {
  return (
    <SearchProvider>
      <Wrapper>
        <SearchInput />
        <SearchResult />
      </Wrapper>
    </SearchProvider>
  );
};

export default SearchComponent;
