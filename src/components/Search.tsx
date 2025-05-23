import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import styled from "styled-components";
import SearchProvider from "./SearchProvider";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Search = () => {
  return (
    <SearchProvider>
      <Wrapper>
        <SearchInput />
        <SearchResult />
      </Wrapper>
    </SearchProvider>
  );
};

export default Search;
