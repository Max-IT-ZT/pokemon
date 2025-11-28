import { getPokemonsDetails, PokemonDetails } from "@/app/api/pocemons/route";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid as Grid,
  Typography,
} from "@mui/material";

export default async function PokemonsMap() {
  const data: PokemonDetails[] = await getPokemonsDetails();

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ marginTop: "20px" }}
      >
        Список Покемонів
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {data.map((pokemon) => (
          <Grid key={pokemon.id}>
            <Card
              sx={{
                border: "1px solid white",
                borderRadius: "20px",
                backgroundColor: "transparent",
                maxWidth: 345,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 150,
                  width: 150,
                  objectFit: "contain",
                  padding: "20px 10px",
                }}
                image={pokemon.sprites.other?.dream_world?.front_default}
                alt={pokemon.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                  color="white"
                  style={{ textTransform: "capitalize" }}
                >
                  {pokemon.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
