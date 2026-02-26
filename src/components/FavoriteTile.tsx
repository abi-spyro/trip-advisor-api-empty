import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  CircularProgress,
  Box,
  Rating,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLocationDetails } from "../api/queries/useLocationDetails";

type Props = {
  locationId: string;
  onRemove: (id: string) => void;
};

// TODO: Write FavoriteTile Card, add support for loading and error states
export const FavoriteTile = ({ locationId, onRemove }: Props) => {
  const { data, isLoading, error } = useLocationDetails(locationId);

  return (
    <Card variant="outlined">
      <CardContent>
        {data?.name}

        {data?.rating}

        {data?.address_obj?.address_string}
      </CardContent>

      <CardActions>
        <IconButton color="error" onClick={() => onRemove(locationId)}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
