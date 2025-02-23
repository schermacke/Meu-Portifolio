import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function Services() {

  return (
    <>
      <Grid
        id={"services"}
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        paddingTop={3}
      >
        <Divider sx={{ width: "70%", mx: "auto" }}>
          <Typography
            variant="h4"
            fontFamily={"monospace"}
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
          >
            Serviços
          </Typography>
        </Divider>
        <Grid
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          padding={3}
        >
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
