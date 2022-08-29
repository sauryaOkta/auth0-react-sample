import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import "./styles.css";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LoggedView from "./LoggedView";

const Navbar = () => {
  const classes = useStyles();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "white" }}
      elevation={0}
    >
      <Toolbar>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to={"/"} className={classes.navItem}>
              CompanyZero
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to={"/product"} className={classes.navItem}>
              Product
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to={"/solution"} className={classes.navItem}>
              Solutions
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to={"/resource"} className={classes.navItem}>
              Resources
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to={"/contact"} className={classes.navItem}>
              Contact Us
            </Link>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {isAuthenticated ? (
              <LoggedView />
            ) : (
              <Button variant="contained" onClick={() => handleLogin()}>
                Login
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles({
  bar: {
    backgroundColor: "white",
  },

  logout: {
    fontWeight: 800,
    fontSize: 16,
    marginLeft: 10,
  },

  navItem: {
    textDecoration: "none",
    color: "black",
    fontWeight: 500,
    fontSize: "20px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
});

export default Navbar;
