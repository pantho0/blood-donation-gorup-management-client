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
        <Box>
          <Typography variant="body1" fontSize={'14px'} textAlign={'justify'} mt={'20px'}>
          At our core, we are driven by a singular mission: to alleviate suffering and promote well-being through the selfless act of blood donation. We strive to foster a community where every individual recognizes the profound impact they can have on the lives of others. By championing the cause of blood donation, we aim to ensure that no one faces the agony of unmet medical needs due to blood shortages. Through education, advocacy, and compassionate outreach, we empower individuals to become lifesavers, forging a brighter, healthier future for all.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
