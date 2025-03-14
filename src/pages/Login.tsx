import { Box, Container, Grid } from "@mui/material";
import { BannerImage } from "../components";

export default function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ alignItems: "center", display: "flex", height: "100vh" }}
          >
            <Container maxWidth="sm">
              <h1>Login</h1>
            </Container>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
