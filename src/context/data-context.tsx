import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext({
  characters: [],
  nextLink: "",
  totalPages: 0,
});

export function DataProvider({ children }: { children: JSX.Element }) {
  const [characters, setCharacters] = useState([]);
  const [nextLink, setNextLink] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((data) => {
      setNextLink(data?.data.next);
      setTotalPages(data?.data.pages);
      setCharacters(data?.data.results);
    });
  }, []);

  return (
    <DataContext.Provider value={{ characters, nextLink, totalPages }}>
      {children}
    </DataContext.Provider>
  );
}
