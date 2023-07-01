import React, { useState ,useEffect} from "react";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Hidden,
  List,
  ListItem,
  makeStyles,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import Link from "next/link";
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cookies from "js-cookie";
const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 250,
    top: 60,
    height: "calc(100% - 64px)",
    backgroundColor: "#6B705A",
    overflow: "hidden",
    padding: "50px 0px",
    border: "0px !important",
  },
  title: {
    fontWeight: 700,
    marginTop: "20px",
    marginLeft: "12px",
  },
  iconWidth: {
    minWidth: "32px",
    color: "var(--theme-color)",
    fontSize: "16px",
  },
  navGroup: {
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  navGroupTitle: {
    paddingBottom: 0,
  },
  medifile_sideBar: {
    position: "relative",
    backgroundColor: "#6B705A",
  },
  nav_link: {
    color: "#000",
    padding: "3px 15px !important",
  },
  nav_link_name: {
    "& span ": {
      fontSize: "14.5px",
      fontWeight: "600",
    },
  },
  active: {
    position: "relative",
    borderTopLeftRadius: "30px",
    background: "#fff",
    borderBottomLeftRadius: "30px",
    "& span ": {
      color: "#6B705A",
      fontSize: "22px",
      fontWeight: "600",
    },
    "& svg": {
      fill: "#6B705A",
    },
  },
 
}));

const Navbar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const name = Cookies.get("name");
  const UserAccountid = Cookies.get('id');
  const router = useRouter();
  const namMenuBar = [
    {
      _id: 1,
      navTitle: "Portfolio",
      navPath: "/account",
      // icon: <DashboardIcon />,
    },
    {
      _id: 2,
      navTitle: "Account",
      navPath: "/account/user-account",
      // icon: <AccountCircleIcon />,
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // useEffect(() => {
  //   if (UserAccountid) {

  //   }
  //   else {
  //      router.push('/signin', undefined, { shallow: true });
  //   }
  // }, )
  
  const content = (
    <Box
      className={classes.medifile_sideBar}
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box className={classes.side_bar_menu} paddingBottom={0}>
        <div className="dropdown user-pro-body text-center">
          <div className="user-info">
            <h5 className="mb-1">{name}</h5>
          </div>
        </div>

        <List className={styles.list_item}>
          {/* {namMenuBar.map((menuName) => (
            <ListItem className={styles.nav_link}>
              <Link href={menuName.navPath} key={menuName._id}>
                <p className={styles.dashboard_data}>
                  {router.pathname == `${menuName.navPath}` ? (
                    <div className={classes.active}>
                      <ListItemIcon className={classes.iconWidth}>
                        {menuName.icon}
                      </ListItemIcon>
                      <ListItemText
                        className={styles.page_title}
                        primary={menuName.navTitle}
                      />
                    </div>
                  ) : (
                    <div className={classes.inactive}>
                      <ListItemIcon className={classes.listName}>
                        {menuName.icon}
                      </ListItemIcon>
                      <ListItemText
                        className={styles.page_title}
                        primary={menuName.navTitle}
                      />
                    </div>
                  )}
                </p>
              </Link>
            </ListItem>
          ))} */}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box p={2} paddingTop={0}></Box>
    </Box>
  );

  return (
    <>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

Navbar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

Navbar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default Navbar;
