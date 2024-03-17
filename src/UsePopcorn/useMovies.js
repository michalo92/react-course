import { useState, useEffect } from "react";

const KEY = "cec111eb";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  useEffect(
    function () {
      //   callback?.();
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setErr("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Error");
          const data = await res.json();
          if (data.Response === "False") throw new Error(`${data.Error}`);
          setMovies(data.Search);
        } catch (error) {
          setErr(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setErr("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, err };
}
