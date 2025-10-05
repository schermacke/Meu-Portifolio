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
        sx={{ flexDirection: { xs: "column", sm: "column", md: "column" } }}
      >
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        >
          <Card
            className="Automagate"
            variant="elevation"
            sx={{ backgroundColor: "rgb(207, 204, 204)", color: "black" }}
          >
            <CardContent>
              <Typography variant="h5" fontFamily={"monospace"}>
                AutomaGate-v2
              </Typography>
              <Card
                variant="outlined"
                sx={{ backgroundColor: "rgb(80,80,80)" }}
              >
                <Carousel
                  interval={4000}
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
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "95%", md: "35%" },
              textAlign: "center",
            }}
          >
            <Typography fontFamily={"monospace"}>
              O sistema foi desenvolvido com o objetivo de montar mensagens em
              formato JSON e enviá-las automaticamente para a nuvem, facilitando
              a integração entre dispositivos industriais e plataformas IoT.
              Para seu funcionamento, o usuário pode criar serviços
              personalizados, definindo parâmetros como nome, intervalo de envio
              e URL de destino. Cada serviço registra suas informações básicas
              no Registro de Eventos do Windows, enquanto os dados operacionais
              são armazenados e gerenciados em um banco de dados SQL Server.
              Quando uma nova mensagem é detectada, o sistema monta o payload
              JSON de forma automática, consultando os dados previamente
              configurados — como destino, tempo de envio e metadados — e
              realiza o envio seguro à nuvem. Desenvolvido em C# com .NET, o
              projeto prioriza performance, estabilidade e confiabilidade,
              atendendo aplicações industriais que exigem processamento contínuo
              e comunicação eficiente. O uso principal está voltado à telemetria
              e termometria industrial, permitindo criar múltiplos serviços de
              coleta e transmissão de dados.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        >
          <Card
            className="Fastconfig"
            variant="elevation"
            sx={{ backgroundColor: "rgb(207, 204, 204)", color: "black" }}
          >
            <CardContent>
              <Typography variant="h5" fontFamily={"monospace"}>
                Control Languiru
              </Typography>
              <Card
                variant="outlined"
                sx={{ backgroundColor: "rgb(80,80,80)" }}
              >
                <Carousel
                  interval={4000}
                  wrap={true}
                  style={{ maxWidth: "550px", maxHeight: "450px" }}
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/login.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/relatorio.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/relatorio2.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/relatorio3.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/ordemproducao.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/string.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/createuser.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/edituser.png"
                      alt="First slide"
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/systemLanguiru/deleteuser.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Card>
            </CardContent>
          </Card>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "95%", md: "35%" },
              textAlign: "center",
            }}
          >
            <Typography fontFamily={"monospace"}>
              O Control Languiru é um sistema desenvolvido especialmente para o
              setor de fabricação de ração, com foco em automação, controle de
              produção e rastreabilidade de processos. Com ele, é possível
              cadastrar novas fórmulas, rações e ordens de produção, além de
              acompanhar todo o ciclo produtivo em tempo real. A principal
              função do sistema é enviar ordens de produção diretamente para o
              CLP, permitindo que o equipamento realize a leitura e execução de
              forma automatizada. A partir dessas ordens, o sistema gera uma
              variedade de relatórios detalhados, incluindo análises por ordem,
              item, batelada, dia ou mês, oferecendo uma visão completa da
              eficiência e produtividade da fábrica. O projeto foi desenvolvido
              em C# com .NET 8, priorizando performance, segurança e longevidade
              da aplicação, com banco de dados SQL Server para garantir
              estabilidade e integridade das informações. Também é possível
              gerenciar usuários, definir permissões e exportar relatórios em
              diferentes formatos, facilitando o controle administrativo e
              operacional.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
