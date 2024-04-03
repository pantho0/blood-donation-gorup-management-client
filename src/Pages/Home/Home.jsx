import { Container, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth='lg'>
<Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            hello
      </Grid>
      <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#880e4f" fillOpacity="1" d="M0,32L120,58.7C240,85,480,139,720,176C960,213,1200,235,1320,245.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
      </Grid>
    </Grid>
    </Container>
  );
};

export default Home;
