import { Container, Grid, Box } from "@mui/material";
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  StyledUl,
} from "../components";
import { pxToRem } from "../utils";

export default function Registration() {
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
                <StyledH1>Faça seu cadastro</StyledH1>
                <StyledP>Primeiro, diga-nos quem você é</StyledP>
                <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelo menos uma letra maiúscula;</li>
                  <li>Pelo menos um caractere especial;</li>
                  <li>Pelo menos um número.</li>
                </StyledUl>
              </Box>
              <FormComponent
                inputs={[
                  { type: "email", placeholder: "Email" },
                  { type: "password", placeholder: "Senha" },
                ]}
                button={[
                  { className: "primary", type: "submit", children: "Login" },
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
