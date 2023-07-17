import React from "react";
import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  console.log(genres);
  return (
    <>
      <div>
        {error && <Text>{error}</Text>}
        <ul>
          {genres.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GenreList;
