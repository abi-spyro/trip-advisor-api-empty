import { useState, useEffect } from "react";
import {
  Box,
  TextField,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSearchLocations } from "../api/queries/useSearchLocations";
import { FavoritesList } from "./FavoritesList";

function useDebounce<T>(value: T, delay: number) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

export const LocationSearch = () => {
  const [query, setQuery] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const debouncedQuery = useDebounce(query, 500);

  const { data, isLoading, error, isFetching } =
    useSearchLocations(debouncedQuery);

  // TODO: Add locationId to favoriteIds list. List has to contain unique elements!
  const toggleFavorite = async (locationId: string) => {};

  return (
    <Box px={2} py={2}>
      <Typography variant="h4" gutterBottom>
        Restaurant Finder
      </Typography>

      <FavoritesList favoriteIds={favoriteIds} onRemove={toggleFavorite} />

      <TextField
        fullWidth
        label="Search restaurants..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {(isLoading || isFetching) && (
        <Box display="flex" justifyContent="center" mt={2}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Error fetching locations.
        </Alert>
      )}

      {data?.data?.length > 0 && (
        <Paper sx={{ mt: 2 }} variant="outlined">
          <List>
            {data.data.map((location: any) => {
              const isFavorite = favoriteIds.includes(location.location_id);

              return (
                <ListItem
                  key={location.location_id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => toggleFavorite(location.location_id)}
                      color={isFavorite ? "error" : "default"}
                    >
                      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={location.name}
                    secondary={location.address_obj?.address_string}
                  />
                </ListItem>
              );
            })}
          </List>
        </Paper>
      )}
    </Box>
  );
};
