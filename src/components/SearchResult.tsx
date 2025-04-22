import React from "react";
import styled from "styled-components";
import SearchHistory from "./SearchHistory";
import Sun from "../../public/assets/sun.png";
import Image from "next/image";
import CurrentWeather from "./CurrentWeather";
import { useSearch } from "@/app/utils";
import ErrorComponent from "./ErrorComponent";
import LoaderComponent from "./LoaderComponent";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 40px;
  padding: clamp(20px, 5vw, 40px);
  border: 1px solid var(--color-white-5);
  background-color: var(--color-white-2);
  position: relative;

  .sun {
    position: absolute;
    top: clamp(-95px, -18vw, -40px);
    right: clamp(20px, 7vw, 60px);
    width: clamp(147px, 35vw, 280px);

    img {
      width: 100%;
      height: auto;
    }
  }

  .loading-error {
    margin-top: 100px;
  }
`;

const SearchResult = () => {
  const { result } = useSearch();

  return (
    <Wrapper>
      <div className="sun">
        <Image src={Sun} alt="Sun" />
      </div>
      {result.status === "success" ? (
        <CurrentWeather data={result.data} />
      ) : (
        <div className="loading-error">
          {result.status === "loading" && (
            <LoaderComponent text="Search in progress" />
          )}
          {result.status === "error" && (
            <ErrorComponent text={result.error.message} />
          )}
        </div>
      )}

      <SearchHistory />
    </Wrapper>
  );
};

export default SearchResult;
