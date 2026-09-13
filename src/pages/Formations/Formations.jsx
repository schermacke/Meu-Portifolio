import { Divider, Typography, Card, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import certificate from "/certificate.png";
import "./Formations.css";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ComputerIcon from "@mui/icons-material/Computer";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ciencia from "../../../public/cienciaImage.png";
import LinearProgress from "@mui/material/LinearProgress";

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
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={5}
        paddingTop={5}
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Card display={"flex"} variant="elevation" sx={{ padding: 3 }}>
          <Grid display={"flex"} flexDirection={"column"}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 1,
                paddingBottom: 1,
                alignItems: "center",
              }}
            >
              <Typography
                textAlign={"center"}
                fontFamily={"monospace"}
                variant="h5"
              >
                <SchoolIcon sx={{ fontSize: "3rem", marginRight: 1.5 }} />
                Análise e desenvolvimento de sistemas
              </Typography>
            </Grid>
            <Card variant="outlined" sx={{ padding: 3, paddingTop: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <img
                  className="imageFront"
                  src={certificate}
                  alt="Certificate"
                  style={{ maxWidth: "600px" }}
                />
              </Grid>
            </Card>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 2,
              }}
            >
              <Box
                sx={{
                  padding: 1,
                  borderRadius: 10,
                  bgcolor: "success.main",
                  "&:hover": {
                    bgcolor: "success.dark",
                  },
                }}
              >
                <Typography
                  textAlign={"center"}
                  fontFamily={"monospace"}
                  variant="h6"
                >
                  <CheckCircleIcon sx={{ fontSize: "2rem", marginRight: 1 }} />
                  Concluido
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card display={"flex"} variant="elevation" sx={{ padding: 3 }}>
          <Grid display={"flex"} flexDirection={"column"}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 1,
                paddingBottom: 1,
                alignItems: "center",
              }}
            >
              <Typography
                textAlign={"center"}
                fontFamily={"monospace"}
                variant="h5"
              >
                <ComputerIcon sx={{ fontSize: "3rem", marginRight: 1.5 }} />
                Ciência da computação
              </Typography>
            </Grid>
            <Card variant="outlined" sx={{ padding: 3, paddingTop: 2 }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <img
                  className="imageFront"
                  src={ciencia}
                  alt="Ciência da Computação"
                  style={{ maxWidth: "600px" }}
                />
              </Grid>
            </Card>
            <Grid
              sx={{
                display: "contents",
                justifyContent: "center",
              }}
            >
              <LinearProgress
                variant="indeterminate"
                value={5} />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 2,
              }}
            >
              <Box
                sx={{
                  padding: 1,
                  borderRadius: 10,
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                <Typography
                  textAlign={"center"}
                  fontFamily={"monospace"}
                  variant="h6"
                >
                  <AccessTimeFilledIcon
                    sx={{ fontSize: "2rem", marginRight: 1 }}
                  />
                  Cursando
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Formations;
