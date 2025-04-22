import { SearchContext } from "@/components/SearchProvider";
import React from "react";

const getTimestamp = (): string => {
  const date = new Date();
  const formatted = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Singapore",
  });

  return formatted.replace(/\//g, "-").replace(",", "");
};

const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export { getTimestamp, useSearch };
