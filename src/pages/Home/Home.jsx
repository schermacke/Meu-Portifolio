import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import About from "../About/About.jsx";
import Services from "../PasteServices/Services.jsx";
//import Contact from "../Contact/Contact.jsx";
import Technologies from "../Technologies/Technologies.jsx";
import "./Home.css";

function Home() {
  const scrollSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGit = () => {
    window.open("https://github.com/schermacke", "_blank");
  };

  const handleInsta = () => {
    window.open("https://www.instagram.com/eduardo_schermack/#", "_blank");
  };

  const handleTelegram = () => {
    window.open("https://t.me/eduardo_schermack", "_blank");
  };
  
  return (
    <>
      <Box
        id="home"
        sx={{
          backgroundImage: 'url("/montainss.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 95%, transparent 100%)",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            paddingTop: 1,
            paddingBottom: 1,
          }}
        >
          <Button
            variant="text"
            color="warning"
            size="large"
            onClick={() => scrollSection("home")}
          >
            Home
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => scrollSection("sobre")}
          >
            Sobre
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => scrollSection("tecno")}
          >
            Tecnologias
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => scrollSection("services")}
          >
            Projetos
          </Button>
          {/*<Button
            variant="text"
            size="large"
            onClick={() => scrollSection("contato")}
          >
            Contato
          </Button>*/}
        </Grid>
        <Divider sx={{ width: "70%", mx: "auto", paddingBottom: 3 }}>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <LocalPhoneIcon sx={{ marginRight: "7px" }} />
            <Typography fontFamily={"monospace"} color="warning">
              +55 5599676 - 4737
            </Typography>
          </Grid>
        </Divider>
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          minHeight={"70vh"}
          flexDirection={"column"}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              padding: 4,
              borderRadius: "50px",
            }}
          >
            <Typography variant="h3" fontFamily={"monospace"}>
              Olá, Eu sou
            </Typography>
            <Typography variant="h2" color="warning" fontFamily={"monospace"}>
              Eduardo Schermack
            </Typography>
          </Box>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            paddingTop={3}
            sx={{ flexWrap: "wrap" }}
          >
            <Typography
              variant="subtitle1"
              fontSize={"18px"}
              fontFamily={"monospace"}
            >
              Sou desenvolvedor web frontend especializado em fornecer código
              limpo.
              <br /> Crio sites altamente interativos com animações envolventes,
              <br />
              proporcionando uma experiência de usuário fluida e atraente.
            </Typography>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            paddingTop={3}
            sx={{ flexWrap: "wrap" }}
          >
            <GitHubIcon
              onClick={handleGit}
              className="git"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
            <InstagramIcon
              onClick={handleInsta}
              className="insta"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
            <TelegramIcon
              onClick={handleTelegram}
              className="tele"
              fontSize="large"
              sx={{ cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </Box>
      <About />
      <Technologies />
      <Services />
    </>
  );
}

export default Home;
