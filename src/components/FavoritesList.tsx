import { Box, Typography, Grid } from "@mui/material";
import { FavoriteTile } from "./FavoriteTile";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  favoriteIds: string[];
  onRemove: (id: string) => void;
};

export const FavoritesList = ({ favoriteIds, onRemove }: Props) => {
  if (!favoriteIds.length) return null;

  return (
    <Box mb={4}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <StarIcon /> Favorite Places
      </Typography>

      <Grid container spacing={2}>
        {favoriteIds.map((id) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={id}>
            <FavoriteTile locationId={id} onRemove={onRemove} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
