import DefaultLayaout from "../components/DefaultLayout";
import { Button, Container, Grid, Typography } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import { useRouter } from "next/navigation";

const useStyles = (theme) => ({
  container: { marginTop: theme.spacing(5) },
});

const Home = (props) => {
  const { classes } = props;

  const router = useRouter();

  const handleBoutiqueClick = () => router.push("/boutique");

  return (
    <DefaultLayaout>
      <Container maxWidth="sm" className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          SuperShop
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" onClick={handleBoutiqueClick}>
                La Boutique
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </DefaultLayaout>
  );
};
export default withStyles(useStyles)(Home);
