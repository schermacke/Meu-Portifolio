import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import certificate from "/certificate.png";
import certificateBack from "/certificateBack.png";

function Formations() {
  return (
    <Grid
      container
      id="formations"
      display={"flex"}
      flexDirection={"column"}
      paddingTop={3}
      sx={{ paddingBottom: { xs: "5rem", sm: "2rem", md: "0rem" } }}
    >
      <Divider sx={{ width: "70%", mx: "auto" }}>
        <Typography
          variant="h4"
          fontFamily={"monospace"}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Formação
        </Typography>
      </Divider>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 5,
        }}
      >
        <Typography fontFamily={"monospace"} variant="h5">
          Análise e desenvolvimento de sistemas
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 2,
          gap: 2,
        }}
      >
        <img src={certificate} alt="Certificate" style={{ width: "600px" }} />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 2,
        }}
      >
        <img
          src={certificateBack}
          alt="Certificate"
          style={{ width: "600px" }}
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 2,
          paddingBottom: 5,
        }}
      >
        <Typography fontFamily={"monospace"} variant="h5">
          Formação Concluida em Setembro de 2025
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Formations;
