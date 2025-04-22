"use client";

import { useState } from "react";
import { Search } from "feather-icons-react";
import styled from "styled-components";
import { useSearch } from "@/app/utils";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 3.75rem;
  align-items: center;
  margin-bottom: 112px;
  position: relative;
  gap: 20px;
`;

const StyledInput = styled.input`
  border-radius: 20px;
  background-color: var(--color-white-2);
  border: none;
  height: 100%;
  flex: 1 1 80%;
  padding: 23px 22px 19px 22px;

  &:focus {
    outline: none;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 12px;
    transform: translateY(-25px);
  }
`;

const FloatingLabel = styled.label`
  position: absolute;
  pointer-events: none;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  font-size: 16px;
  transition: transform 0.3s ease-out;
  color: var(--color-dark-grey);
`;

const StyledIcon = styled.div`
  padding: 13px;
  background-color: var(--color-purple);
  border-radius: 17px;
  color: var(--color-white-10);
`;

const SearchInput = () => {
  const [input, setInput] = useState("");
  const { handleSearch } = useSearch();

  return (
    <Wrapper>
      <StyledInput
        placeholder=""
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        id="country-input"
      />
      <FloatingLabel htmlFor="country-input">Country</FloatingLabel>
      <StyledIcon>
        <Search
          data-testid="search-icon"
          onClick={() => {
            setInput("");
            handleSearch(input);
          }}
        />
      </StyledIcon>
    </Wrapper>
  );
};

export default SearchInput;
