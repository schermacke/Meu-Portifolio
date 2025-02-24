import { Card, CardContent, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Services() {
  return (
    <Grid
      id={"services"}
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      paddingTop={5}
      paddingBottom={10}
    >
      <Divider sx={{ width: "70%", mx: "auto" }}>
        <Typography
          variant="h4"
          fontFamily={"monospace"}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Projetos
        </Typography>
      </Divider>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        paddingTop={7}
        sx={{ flexDirection: { xs: "column", sm: "column", md: "row" }}}
      >
        <Card
          className="Separa"
          variant="elevation"
          sx={{ backgroundColor: "rgb(207, 204, 204)", color: "black" }}
        >
          <CardContent>
            <Typography variant="h5" fontFamily={"monospace"}>
              SeparaLixo
            </Typography>
            <Card variant="outlined" sx={{ backgroundColor: "rgb(80,80,80)" }}>
              <Carousel
                interval={3000}
                wrap={true}
                style={{ maxWidth: "300px", maxHeight: "250px" }}
              >

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/lua.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>MANUTENÇÃO</h5>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/lua.png"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>MANUTENÇÃO</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card>
          </CardContent>
        </Card>
        <Card
          className="Automagate"
          variant="elevation"
          sx={{ backgroundColor: "rgb(207, 204, 204)", color: "black" }}
        >
          <CardContent>
            <Typography variant="h5" fontFamily={"monospace"}>
              AutomaGate-v2
            </Typography>
            <Card variant="outlined" sx={{ backgroundColor: "rgb(80,80,80)" }}>
              <Carousel
                interval={3000}
                wrap={true}
                style={{ maxWidth: "550px", maxHeight: "350px" }}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/one.png"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/two.png"
                    alt="Second slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/three.png"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/for.png"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/five.png"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/six.png"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/seven.png"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/Automagate/three.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Card>
          </CardContent>
        </Card>
        <Card
          className="Fastconfig"
          variant="elevation"
          sx={{ backgroundColor: "rgb(207, 204, 204)", color: "black" }}
        >
          <CardContent>
            <Typography variant="h5" fontFamily={"monospace"}>
              F.A.S.T Config
            </Typography>
            <Card variant="outlined" sx={{ backgroundColor: "rgb(80,80,80)" }}>
              <Carousel
                interval={3000}
                wrap={true}
                style={{ maxWidth: "300px", maxHeight: "250px" }}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/lua.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>MANUTENÇÃO</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/lua.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>MANUTENÇÃO</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Services;
