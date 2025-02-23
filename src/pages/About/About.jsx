import {
  Button,
  Card,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import image from "/lua.png";
import DescriptionIcon from "@mui/icons-material/Description";
import CakeIcon from "@mui/icons-material/Cake";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import CodeIcon from "@mui/icons-material/Code";

function About() {
  const ContactData = [
    { label: "Aniversário", value: "17 Out, 1998", icon: <CakeIcon /> },
    { label: "WhatsApp", value: "(55) 9 9676 - 4737", icon: <WhatsAppIcon /> },
    { label: "E-mail", value: "e.schermack07@gmail.com", icon: <MailIcon /> },
    { label: "Cidade", value: "Panambi-RS", icon: <MyLocationIcon /> },
    { label: "Freelance", value: "Disponível", icon: <CodeIcon /> },
  ];

  return (
    <Grid
      container
      id="sobre"
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      paddingTop={3}
      paddingBottom={10}
    >
      <Divider sx={{ width: "70%", mx: "auto" }}>
        <Typography
          variant="h4"
          fontFamily={"monospace"}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Sobre
        </Typography>
      </Divider>

      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: 2, sm: 5, md: 5 }}
        sx={{
          paddingTop: { xs: 4, md: 7 },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          maxWidth: { xs: "90%", md: "70%" },
        }}
      >
        <Card
          sx={{
            maxWidth: { xs: "100%", sm: "70%", md: "50%" },
            maxHeight: "450px",
            borderRadius: "1px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt="Eduardo Schermack"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>
        <Grid
          item
          sx={{
            textAlign: { xs: "center", sm:"center" },
            maxWidth: { xs: "100%", md: "60%" },
          }}
        >
          <Typography
            fontFamily={"monospace"}
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Sobre o Eduardo!
          </Typography>
          <Typography
            paddingTop={1}
            fontFamily={"monospace"}
            color="warning"
            variant="h6"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Desenvolvedor web
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
            paddingTop={1}
            fontFamily={"monospace"}
            variant="h6"
          >
            Apaixonado por tecnologia e sempre em busca de inovação. Trabalho
            com React.js para criar interfaces dinâmicas e responsivas,
            utilizando libs de estilização para um design moderno. No back-end,
            utilizo Node.js com Express e Axios para construir APIs eficientes,
            além de gerenciar dados com Prisma e bancos relacionais e não
            relacionais. Também desenvolvo aplicações para Windows em C# - .net.
            Sempre explorando novas tecnologias para otimizar meus projetos.
          </Typography>
          <List>
            {ContactData.map((item, index) => (
              <ListItem
                key={index}
                disableGutters
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <Card
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{ fontFamily: "monospace" }}
                >
                  <Grid display={"flex"} textAlign={"center"}>
                    {item.icon}
                    <strong style={{ paddingLeft: "7px" }}>{item.label}</strong>
                    : {item.value}
                  </Grid>
                </Card>
              </ListItem>
            ))}
          </List>
          <Grid
            item
            display={"flex"}
            paddingTop={2}
            sx={{ justifyContent: { xs: "center", md: "left" } }}
          >
            <Button variant="contained" fontFamily="monospace" color="primary">
              <DescriptionIcon
                sx={{
                  marginRight: "7px",
                  display: "flex",
                  alignItems: "center",
                }}
              />
              Download CV
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
