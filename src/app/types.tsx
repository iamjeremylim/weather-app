export type Coordinate = {
  lat: number;
  lon: number;
  name?: string;
  country?: string;
  state?: string;
};

export type History = {
  country: string;
  timestamp: string;
};

export type WeatherData = {
  current: {
    temp: number;
    humidity: number;
    weather: { description: string }[];
  };
};

export type SearchContextType = {
  result: SearchProgress;
  history: History[];
  handleSearch: (query: string) => void;
  setResult: (res: SearchProgress) => void;
  filterHistory: (index: number) => void;
};

export type SearchProgress =
  | { status: "init" }
  | { status: "loading" }
  | { status: "error"; error: Error }
  | { status: "success"; data: WeatherData };
