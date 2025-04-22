import { fireEvent, render, waitFor } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vi,
} from "vitest";
import SearchComponent from "@/components/SearchComponent";
import { Coordinate, WeatherData } from "@/app/types";

vi.mock("next/image", () => ({
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("Search", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("user can input country", () => {
    const { getByLabelText } = render(<SearchComponent />);

    const countryInput = getByLabelText("Country");

    expect(countryInput).toBeInTheDocument();
  });

  test("user can see search history", () => {
    const { getByText } = render(<SearchComponent />);

    const searchHistory = getByText("Search History");

    expect(searchHistory).toBeInTheDocument();
  });

  test("user can search country's weather successfully and delete search history", async () => {
    const mockCoordinates: Coordinate[] = [{ lat: 1.35, lon: 103.82 }];
    const mockWeather: WeatherData = {
      current: {
        temp: 30,
        humidity: 70,
        weather: [{ description: "clear sky" }],
      },
    };

    (global.fetch as Mock)
      .mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockCoordinates),
        })
      )
      .mockImplementationOnce(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockWeather),
        })
      );

    const { container, getByLabelText, getByTestId, getByText } = render(
      <SearchComponent />
    );

    const input = getByLabelText("Country");

    fireEvent.change(input, { target: { value: "Singapore" } });
    fireEvent.click(getByTestId("search-icon"));
    const loaderIcon = getByTestId("loader");
    const searchHistory = container.querySelectorAll(".entry");

    expect(loaderIcon).toBeInTheDocument();
    await waitFor(() => {
      expect(loaderIcon).not.toBeInTheDocument();
      expect(getByText("Today's Weather")).toBeInTheDocument();
    });

    fireEvent.click(getByTestId("delete-icon-0"));
    expect(searchHistory).toHaveLength(0);
  });

  test("user unable to search country's weather", async () => {
    (global.fetch as Mock).mockImplementationOnce(() =>
      Promise.reject({
        json: () => Promise.reject(),
      })
    );

    const { getByLabelText, getByTestId, getByText } = render(
      <SearchComponent />
    );

    const input = getByLabelText("Country");

    fireEvent.change(input, { target: { value: "Singapore" } });
    fireEvent.click(getByTestId("search-icon"));
    const loaderIcon = getByTestId("loader");

    expect(loaderIcon).toBeInTheDocument();
    await waitFor(() => {
      expect(loaderIcon).not.toBeInTheDocument();
      expect(
        getByText("Unable to fetch coordinates of country. Try again?")
      ).toBeInTheDocument();
    });
  });
});
