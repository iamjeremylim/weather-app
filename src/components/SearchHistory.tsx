"use client";

import { useSearch } from "@/app/utils";
import { Search, Trash2 } from "feather-icons-react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff33;
  padding: 23px 20px 23px 20px;
  border-radius: 24px;
  margin-top: 24px;
`;

const Entries = styled.div`
  overflow: auto;
  max-height: 100vh;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 24px;
`;

const Entry = styled.div`
  display: flex;
  background-color: #ffffff66;
  border-radius: 16px;
  padding: 13px 15px 13px 21px;
  align-items: center;
`;

const CountryTimestamp = styled.div`
  display: flex;
  flex: 1 1 80%;
  flex-wrap: wrap;

  :first-child {
    margin-right: auto;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 10px;
`;

const IconWrapper = styled.div`
  padding: 9px;
  background-color: #ffffff;
  border-radius: 50%;
  height: 2.125rem;
  width: 2.125rem;
  display: flex;
  align-items: center;
`;

const SearchHistory = () => {
  const { history, filterHistory, handleSearch } = useSearch();

  return (
    <Wrapper>
      <div>Search History</div>

      <Entries>
        {history.map((query, index) => (
          <Entry key={index}>
            <CountryTimestamp>
              <div>{query.country}</div>
              <div>{query.timestamp}</div>
            </CountryTimestamp>
            <Actions>
              <IconWrapper>
                <Search onClick={() => handleSearch(query.country)} />
              </IconWrapper>
              <IconWrapper>
                <Trash2 onClick={() => filterHistory(index)} />
              </IconWrapper>
            </Actions>
          </Entry>
        ))}
      </Entries>
    </Wrapper>
  );
};

export default SearchHistory;
