"use client";

import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
// import { API_KEY } from "@/app/constants";
// import { Coordinate, History, WeatherData } from "@/app/types";
import styled from "styled-components";
import SearchProvider from "./SearchProvider";
// import { getTimestamp } from "@/app/utils";
// import ErrorComponent from "./ErrorComponent";
// import LoaderComponent from "./LoaderComponent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Search = () => {
  // const [history, setHistory] = useState<History[]>([]);
  // const [result, setResult] = useState<null | WeatherData>(null);
  // const [error, setError] = useState<null | Error>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [searchInput, setSearchInput] = useState<string>("")

  // useEffect(() => {
  //   setLoading(true);
  //   getWeather(DEFAULT_QUERY)
  //     .then((weather) => {
  //       setResult({
  //         current: {
  //           temp: Math.round(weather.current.temp),
  //           humidity: weather.current.humidity,
  //           weather: [{ description: weather.current.weather[0].description }],
  //         },
  //       });
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

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
