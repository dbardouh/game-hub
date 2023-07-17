import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <div>
        {error && <Text>{error}</Text>}
        <List>
          {data.map((g) => (
            <ListItem key={g.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(g.image_background)}
                ></Image>
                <Button
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectGenre(g)}
                >
                  {g.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default GenreList;
