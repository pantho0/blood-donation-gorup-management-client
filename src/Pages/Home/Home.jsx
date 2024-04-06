import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import bannerImage from "../../assets/images/banner/pexels-photo-12193105.jpeg";

const Home = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box component="img" alt="banner" src={bannerImage} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h2"
              maxWidth={"80%"}
              fontWeight={700}
              fontSize={40}
              color={"primary"}
            >
              Donate Your Blood to Us, Save More Life Together
            </Typography>
          </Box>
          <Box>
            <Typography maxWidth={"80%"} textAlign={"justify"}>
              Join us in the noble cause of saving lives. Your blood donation
              can be the lifeline for someone in need. Together, let's make a
              difference in the world by giving the gift of life. Every drop
              counts, every donor matters. Donate blood and be a hero in
              someone's story.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Container>
        <Box sx={{ width: "18%", margin: "20px auto 0px auto" }}>
          <Paper elevation={3}>
            <Typography
              variant="h2"
              textAlign={"center"}
              fontSize={"32px"}
              fontWeight={"600"}
              sx={{padding:'4px'}}
            >
              Our Mission
            </Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Home;
