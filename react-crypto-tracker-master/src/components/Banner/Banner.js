import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./banner2.jpg)",
    
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "LightBlue",
            }}
          >
          Crypto Insight
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "lightblue",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Collect all the information about your favorite cryptocurrency
            
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
