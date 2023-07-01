import React from "react";
import clsx from "clsx";
import Link from "next/link";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  makeStyles,
  ListItemText,
 
} from "@material-ui/core";
// import { Image } from "components/atoms";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cookies from "js-cookie";
import { useRouter } from "next/router";
// import BrandLogo from "./../../../../../public/assets/Images/logo/logo_black.svg";
const options = [
  {
    id: 1,
    name: "Dashboard",
    href: "/account",
  },
  {
    id: 2,
    name: "Log Out",
    href: "",
  },
];
const useStyles = makeStyles((theme) => ({
  root_som: {
    padding: "10px",
    height: "60px",
 
  },
  accountAction: {
    position: "relative",
      fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#212427 !important ",
    cursor: "pointer",
    background:'#fff',
    "&:hover ": {
      background: "#fff",
      boxShadow:'none !important',
    },
  },
  pointer: {
    marginRight: "25px",
    fontFamily: "Nunito Sans !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#212427 !important ",
    cursor: "pointer",
  },
  btnG: {
    position: "relative",
    boxShadow: "none !important",
    '& .MuiButtonGroup-groupedContainedHorizontal:not(:last-child)':{
      borderRight: 'none !important' ,
    }
  },
  nav_link: {
    position: "relative",
    width: "auto",
    padding: "0 10px",
    "& p": {
      margin: "0px",
      "& span ": {
        fontFamily: "Nunito Sans !important",
        fontStyle: "normal !important",
        fontWeight: "400 !important",
        fontSize: "18px",
        lineHeight: "25px",
        color: "#212427",
        cursor: "pointer",
      },
    },
  },
  loginAvatar: {
    marginLeft: "9px",
    width: "30px",
    height: "30px",
    borderRadius: 4,
    "& img ": {
      objectFit: "contain !important",
    },
  },
  MenuContainer: {
    position: "relative",
    '@media (max-width: 958px)': {
      display:'none',
    }
  },
  list_item: {
    display: "flex",
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    position: "relative",
    height: "auto",
    top: "-6px",
    width: "120px",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    paddingRight: 0,
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
  },
  listItemButton: {
    whiteSpace: "nowrap",
  },
  iconButton: {
    paddingRight: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  inner_header: {
    position: "relative",
    height: "50px",
    minHeight: "50px",
    width: "100%",
    margin: "0 auto",
  },
  notification: {
    width: ".55em",
    height: ".55em",
  },
  userIcon:{
    fill:'#ffae00',
  }
}));

const Topbar = ({
  className,
  onMobileNavOpen,
  themeToggler,
  themeMode,
  ...rest
}) => {
  const classes = useStyles();
  //Code For Dashboard
  // Code for Right Dropdown  Menu
  const router = useRouter();

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));
  const name = Cookies.get("name");
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Code for Right Dropdown menu ends
  const userAccountID = Cookies.get("id");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <AppBar
      className={clsx(classes.root_som, className)}
      elevation={0}
      color="inherit"
      {...rest}
    >
      <Toolbar className={classes.inner_header}>
       
       
       
      </Toolbar>
    </AppBar>
  );
};

// Topbar.propTypes = {
//   className: PropTypes.string,
//   onMobileNavOpen: PropTypes.func,
//   themeToggler: PropTypes.func.isRequired,
//   themeMode: PropTypes.string.isRequired,
// };

export default Topbar;
