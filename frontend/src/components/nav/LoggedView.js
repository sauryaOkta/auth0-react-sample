import React, { useEffect, useState } from "react";
import {
  Avatar,
  Menu,
  Box,
  MenuItem,
  Typography,
  IconButton,
  Divider,
  Link,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from "@mui/icons-material";

const LoggedView = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { isAuthenticated, user, logout } = useAuth0();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutuser = async () => {
    await logout();
    handleCloseUserMenu();
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("user --> ", JSON.stringify(user));
    }
  }, [isAuthenticated]);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={(e) => handleOpenUserMenu(e)}>
        <Avatar sx={{ bgcolor: "success.main" }} src={user.picture} />
      </IconButton>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Avatar
            sx={{ bgcolor: "success.main", mr: "10px" }}
            src={user.picture}
          />
          <Box>
            <Typography variant="h6">{user.given_name}</Typography>
            <Typography variant="subtitle">
              {user.preferred_username}
            </Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseUserMenu}>
          <Link className={classes.link} to="/profile">
            Profile
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseUserMenu}>
          <Link className={classes.link} to="/token">
            View Tokens
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Button
            className={classes.logout}
            startIcon={<Logout sx={{ mr: "5px" }} />}
            onClick={() => logoutuser()}
          >
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </Box>
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

export default LoggedView;
