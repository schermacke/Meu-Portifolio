import { Card, CardContent, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StorageIcon from "@mui/icons-material/Storage";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import HandymanIcon from "@mui/icons-material/Handyman";
import { FaReact } from "react-icons/fa";
//import { Padding } from "@mui/icons-material";
import { SiExpress } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiPrisma } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import "./Tecno.css";

function Technologies() {
  return (
    <Grid
      id="tecno"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Divider sx={{ width: "70%", mx: "auto" }}>
        <Typography
          variant="h4"
          fontFamily={"monospace"}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Tecnologias
        </Typography>
      </Divider>
      <Grid
        paddingTop={5}
        item
        sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        <Card
          className="Developer"
          variant="elevation"
          sx={{ backgroundColor: "rgb(207, 204, 204)", color: "black" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontFamily={"monospace"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <DeveloperBoardIcon sx={{ marginRight: "5px" }} />
              Desenvolvimento
            </Typography>
            <Card
              variant="outlined"
              sx={{ backgroundColor: "rgb(80, 80, 80)" }}
            >
              <Grid item padding={2}>
                <Typography
                  paddingBottom={"10px"}
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <FaReact
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  React.js
                </Typography>
                <Typography
                  paddingBottom={"10px"}
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <FaVuejs
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  Vue.js
                </Typography>
                <Typography
                  paddingBottom={"10px"}
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IoLogoElectron
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  Electron.js
                </Typography>
                <Typography
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SiExpress
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  Express.js
                </Typography>
                <Typography
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <TbBrandCSharp
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  .net
                </Typography>
              </Grid>
            </Card>
          </CardContent>
        </Card>
        <Card
          className="Database"
          variant="elevation"
          sx={{ backgroundColor: "rgb(226, 220, 220)", color: "black" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontFamily={"monospace"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <StorageIcon sx={{ marginRight: "5px" }} />
              Banco de Dados
            </Typography>

            <Card
              variant="outlined"
              sx={{ backgroundColor: "rgb(80, 80, 80)" }}
            >
              <Grid item padding={2}>
                <Typography
                  paddingBottom={"10px"}
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SiMongodb
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  MongoDB
                </Typography>
                <Typography
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SiMysql
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  MySQL
                </Typography>
              </Grid>
            </Card>
          </CardContent>
        </Card>
        <Card
          className="Framework"
          variant="elevation"
          sx={{ backgroundColor: "rgb(207, 204, 204)", color: "black" }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontFamily={"monospace"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <HandymanIcon sx={{ marginRight: "5px" }} />
              Frameworks
            </Typography>
            <Card
              variant="outlined"
              sx={{ backgroundColor: "rgb(80, 80, 80)" }}
            >
              <Grid item padding={2}>
                <Typography
                  paddingBottom={"10px"}
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SiMui
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "7px" }}
                  />
                  Mui Material
                </Typography>
                <Typography
                  paddingBottom={"10px"}
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <FaBootstrap
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  Bootstrap
                </Typography>
                <Typography
                  paddingBottom={"10px"}
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SiPrisma fontSize={"30px"} style={{ marginRight: "5px" }} />
                  Prisma.js
                </Typography>
                <Typography
                  variant="h6"
                  fontFamily={"monospace"}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <SiAxios
                    fontSize={"30px"}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  />
                  Axios.js
                </Typography>
              </Grid>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Technologies;
