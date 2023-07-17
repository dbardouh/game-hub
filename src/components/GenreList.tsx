import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      <div>
        {error && <Text>{error}</Text>}
        <ul>
          {data.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GenreList;
