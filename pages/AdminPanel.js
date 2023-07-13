import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Button, Container } from "@material-ui/core";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
import TipsImg from "../public/assets/images/tips.jpg";
import CallerImg from "../public/assets/images/caller.jpg";
import Gmail from "../public/assets/images/mail.png";
import Twitter from "../public/assets/images/twitter.png";
import InstaGram from "../public/assets/images/insta.png";
import FaceBook from "../public/assets/images/facebook.png";
// import bgImage from "../public/assets/images/bgtexture.jpg";
import PanelButton from '../public/images/panel_button.png';
import Background from '../public/assets/images/bgtexture.jpg';
import PlusIcon from '../public/images/plus.svg';
import EditIcon from '../public/images/editIcon.svg';
import UserIcon from '../public/images/userIcon.svg';
import downArrow from '../public/images/downArrow.svg';
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UserLog from "./UserLog";
import Feedback from "./Feedback";
// import LineChart from "./LineChart";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import styles from '../styles/AdminPanel.module.css';
import Cookies from "js-cookie";
import Link from "next/link";
// import Cookies from "js-cookie";
const NewChart = dynamic(() => import("../src/NewChart"), { ssr: false });
const Calendar = dynamic(() => import("../src/Calendar"));

const style = {
  position: 'absolute',
  borderRadius: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  width: '60%',
  height: '90%',
  background: '#FFF',
  boxShadow: 24,
  "@media  (min-width: 300px) and (max-width: 450px)": {
    borderRadius: "5px",
    width: '100%',
    height: '100%',
  },
  "@media  (min-width: 451px) and (max-width: 599px)": {
    width: '80%',
    height: '90%',
  },
  "@media  (min-width: 600px) and (max-width: 1024px)": {
    width: '90%',
    height: '90%',
  },
  p: 1,
};

const AdminPanel = () => {
  const router = useRouter();
  const [feedback, setFeedback] = useState(false);
  const [userName, setUserName] = useState('User');
  const feedBackOpen = () => setFeedback(true);
  const feedBackClose = () => setFeedback(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove('userName');
    Cookies.remove('userId');
    router.push('/SigninPage');
  };

  useEffect(() => {
    setUserName(Cookies.get('userName'));
  }, []);

  return (
    <div className={`${styles.main_container}`}>
      <div className={styles.leftSection}>
        <div className={styles.button_container}>
          <Image src={PanelButton} alt="panel button" />
        </div>
        <div className={styles.calendar_container}>
          <Calendar />
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.button_container_box}>
          <button className={styles.buttons_pill}>
            <Image src={PlusIcon} alt="button Icon" />
            <span className={styles.button_text}>Tips</span>
          </button>
          <button className={styles.buttons_pill} onClick={feedBackOpen}>
            <Image src={PlusIcon} alt="button Icon" />
            <span className={styles.button_text}>Feedback Form</span>
          </button>
          <Link href='/'>
            <button className={styles.buttons_pill}>
              <Image src={EditIcon} alt="button Icon" />
              <span className={styles.button_text}>Go To Player</span>
            </button>
          </Link>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className={styles.buttons_pill}
          >
            <Image src={UserIcon} alt="button Icon" />
            <span className={styles.button_text} style={{ margin: '0 5px' }}>{userName}</span>
            <Image src={downArrow} alt="button Icon" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className={styles.menu_link} LinkComponent={'span'} onClick={handleClose}>Profile</MenuItem>
            <MenuItem className={styles.menu_link} LinkComponent={'span'} onClick={handleClose}>My account</MenuItem>
            <MenuItem className={styles.menu_link} LinkComponent={'span'} onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
        <div className={styles.user_log}>
          {/* <h2>{`${userName}'s Player Log`}</h2> */}
          <UserLog />
        </div>

        <div className={styles.graph_container}>
          <NewChart />
        </div>
      </div>
      <Modal
        open={feedback}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div style={{height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 15px', color: '#4c4c4c'}}>
            <h2>Feedback Form</h2>
            <span style={{ float: 'right', borderRadius: '50%', fontSize: '40px', width: '4%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }} onClick={feedBackClose}>X</span>
          </div>
          <Feedback setFeedback={setFeedback} />
        </Box>
      </Modal>
    </div >
  );
};

export default AdminPanel;