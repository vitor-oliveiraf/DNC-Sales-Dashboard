import { Box, Container, Grid } from "@mui/material";
import { BannerImage, FormComponent, StyledH1, StyledP } from "../components";
import { pxToRem } from "../utils";

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
              <Box sx={{ marginBottom: pxToRem(24) }}>logo</Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite seu email e senha para logar</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: "email", placeholder: "Email" },
                  { type: "password", placeholder: "Senha" },
                ]}
                button={[
                  {
                    className: "primary",
                    type: "submit",
                    children: "Login",
                    disabled: true,
                  },
                ]}
                message={{
                  msg: "Email ou senha inválidos",
                  type: "success",
                }}
              />
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
