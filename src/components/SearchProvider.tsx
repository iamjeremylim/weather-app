import React, { useState } from "react";
import { getTimestamp } from "@/app/utils";
import {
  Coordinate,
  History,
  SearchContextType,
  SearchProgress,
  WeatherData,
} from "@/app/types";

export const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined
);

type SearchProviderProps = { children: React.ReactNode };

const SearchProvider = ({ children }: SearchProviderProps) => {
  const [history, setHistory] = useState<History[]>([]);
  const [result, setResult] = useState<SearchProgress>({
    status: "init",
  });

  const getCoordinates = async (query: string): Promise<Coordinate[]> => {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return result.json();
    } catch (error) {
      console.log(error);
      throw new Error("Unable to fetch coordinates of country. Try again?");
    }
  };

  const getWeather = async ({ lat, lon }: Coordinate): Promise<WeatherData> => {
    try {
      const result = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      return result.json();
    } catch (error) {
      console.log(error);
      throw new Error("Unable to fetch country's weather. Try again?");
    }
  };

  const handleSearch = (query: string) => {
    setResult({ status: "loading" });
    getCoordinates(query)
      .then((coordinates) => {
        if (!coordinates.length) throw new Error("No coordinates found.");
        return getWeather(coordinates[0]);
      })
      .then((weather) => {
        const timestamp = getTimestamp();
        const newHistory = [
          ...history,
          { country: query, timestamp: timestamp },
        ];
        setHistory(newHistory);
        setResult({
          status: "success",
          data: {
            current: {
              temp: Math.round(weather.current.temp),
              humidity: weather.current.humidity,
              weather: [
                { description: weather.current.weather[0].description },
              ],
            },
          },
        });
      })
      .catch((error) => {
        setResult({ status: "error", error });
      });
  };

  const filterHistory = (id: number) => {
    const newHistory = history.filter((_, index) => id !== index);
    setHistory(newHistory);
  };

  return (
    <SearchContext.Provider
      value={{ result, history, setResult, filterHistory, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
