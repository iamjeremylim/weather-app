import { History, WeatherData } from "@/app/types";
import { getTimestamp, useSearch } from "@/app/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 0 13px 0 13px;

  .result_block_1 {
    display: flex;
    flex-direction: column;

    :first-child {
      margin-bottom: -18px;
    }

    .curr_temperature {
      font-size: 5rem;
      font-weight: bold;
      color: var(--color-purple);
    }

    .curr_country {
      font-weight: 700;
      color: var(--color-grey);
    }
  }

  .result_block_2 {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 13px;
    width: 65%;
    flex-flow: column-reverse;
    align-items: flex-end;
    color: var(--color-grey);
  }

  @media (min-width: 768px) {
    .result_block_2 {
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;

interface CurrentWeatherProps {
  data: WeatherData;
}

const CurrentWeather = ({ data }: CurrentWeatherProps) => {
  const { history } = useSearch();

  const lastSearched: History =
    history.length > 0
      ? history[history.length - 1]
      : { country: "Singapore", timestamp: getTimestamp() };

  return (
    <Wrapper>
      <div className="result_block_1">
        <div>Today&#39;s Weather</div>
        <div className="curr_temperature">{data.current.temp}°</div>
        <div className="curr_country">{lastSearched.country}</div>
      </div>
      <div className="result_block_2">
        <div>{lastSearched.timestamp}</div>
        <div>Humidity: {data.current.humidity}%</div>
        <div>{data.current.weather[0].description}</div>
      </div>
    </Wrapper>
  );
};

export default CurrentWeather;
