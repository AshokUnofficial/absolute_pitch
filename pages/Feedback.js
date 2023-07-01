import React, { useState } from "react";
import Image from "next/image";
import Wheel from "../public/assets/images/wheel.png";
import Songs from "../public/assets/images/songs.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import {
  Grid,
  makeStyles,
  Button,
  Container,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    background: "#fff",
  },
  containerBox: {
    // height: "auto",
    width: "99.5%",
    padding: "10px",
    background: "#fff !important",
    height: "100vh",
    "@media (min-width: 770px) and (max-width:1024px)": {
      height: "95%",
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: "1%",
      width: "90%",
      border: "2px solid yellow",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      height: "125vh",
      border: "2px solid blue",
    },
    "@media  (min-width: 1681px)and (max-width: 1920px)": {
      width: "100%",
      // marginLeft:'1% !important',
      height: "99.6vh",
      padding: "5px",
    },
    "@media  (min-width: 1921px)and (max-width: 1220px)": {
      width: "90%",
      // marginLeft:'1% !important',
      height: "95%",
      padding: "5px",
    },
  },
  leftSection: {
    padding: "30px 5px 2px 0px",
  },
  rightSection: {
    padding: "30px 0px 2px 10px",
  },
  typo_design: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "50px",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
    background: "Navy",
    color: "#fff",
    borderRadius: "20px",
    padding: "22px",
    width: "80%",
    "@media (max-width: 958px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  typo_design2: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
    background: "Navy",
    color: "#fff",
    borderRadius: "20px",
    padding: "24px",
    width: "80%",
    // lineHeight: "50px",
    height: "76%",
    "@media (max-width: 958px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  formControl: {
    width: "100%",
    "& label ": {
      fontSize: ".8rem !important",
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },

      transition: "none",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(20px, 15px) scale(1)",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#fff",
    },

    "& .MuiInputLabel-filled.MuiInputLabel-shrink": {
      transform: "translate(37px, -8px) scale(1)",
      background: "#fff",
      padding: "0px 5px",
    },
  },
  inputField: {
    width: "100%",
    border: " 2px solid Navy !important",
    borderRadius: "10px",
    marginTop: "12px",
    padding: "18px 0px 18px 0px",
    "&:active": {
      border: " 2px solid Navy !important",
      border: " 2px solid Navy !important",
    },
    "&:focus": {
      border: " 2px solid Navy !important",
      border: " 2px solid Navy !important",
    },
    "&:focus-within": {
      border: " 2px solid Navy !important",
      border: " 2px solid Navy !important",
    },
    "&:visited": {
      border: " 2px solid Navy !important",
      border: " 2px solid Navy !important",
    },
    "&:focus-visible": {
      border: " 2px solid Navy !important",
      border: " 2px solid Navy !important",
    },
    "&:target": {
      border: " 2px solid Navy !important",
      border: " 2px solid Navy !important",
    },

    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(30px, -8px) scale(0.75)",
      background: "#fff",
      padding: "0 50px",
    },

    "& .MuiFilledInput-root": {
      backgroundColor: " #fff",
      borderRadius: "30px",
      overflow: "hidden",
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        transition: "none",
        borderBottom: "none",
      },
      "&:after": {
        transition: "none",
        borderBottom: "none",
      },
      transition: "none",
      borderBottom: "none",
    },
    "& .MuiFilledInput-input": {
      padding: "10px 20px 12px 25px !important",
      fontSize: "25px",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(30px, 30px) scale(1)",
      fontSize: "25px",
    },
  },
  songBox: {
    width: "100%",
    height: "17vh",
    // border: "2px solid yellow",
  },
  systemBox: {
    width: "100%",
    height: "28vh",
    // background:'grey',
  },
  IconBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    height: "50%",
    background: "grey",
  },
  iconDesign: {
    color: "Navy",
    width: "100px !important",
    height: "100px !important",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
  },
});
const Feedback = () => {
  const classes = useStyles();
  const [classics, setClassics] = useState("");
  const [Original, setOriginal] = useState("");
  const [buttons, setButtons] = useState("");
  const [wheel, setWheel] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [about, setAbout] = useState("");
  const Data = (e) => {
    alert(classics);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("feedback", "1");
    urlencoded.append("user_id", Cookies.get("userId"));
    urlencoded.append("classic", classics);
    urlencoded.append("original", Original);
    urlencoded.append("button", buttons);
    urlencoded.append("wheel", wheel);
    urlencoded.append("anything", about);
    urlencoded.append("testimonial", testimonial);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://mylatinhome.com/absolute/appdata/webservice.php",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <form id="my-form">
      <Grid container spacing={0} className={classes.containerBox}>
        <Grid
          item
          xs={12}
          md={4}
          sm={12}
          sx={12}
          className={classes.leftSection}
        >
          <div className={classes.systemBox}>
            <div style={{ marginTop: "2px", height: "58%", width: "100%" }}>
              <Image
                src={Songs}
                alt="Picture of the author"
                width="800"
                height={190}
              />
            </div>
            <div>
              {" "}
              <h1 className={classes.typo_design2} style={{ width: "93%" }}>
                Songs
              </h1>
            </div>
          </div>
          <div className={classes.systemBox}>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12} style={{ background: "grey" }}>
                <Image
                  src={Wheel}
                  alt="Picture of the author"
                  width={500}
                  height={380}
                  style={{ marginTop: "2px", borderRadius: "20px" }}
                />
              </Grid>
              <Grid item md={6} xs={12} style={{ position: "relative" }}>
                <div
                  style={{
                    height: "100%",
                    background: "grey",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <h1 className={classes.typo_design2}>SYSTEM</h1>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.systemBox}>
            <Grid container spacing={1} style={{ height: "100%" }}>
              <Grid item md={6} xs={12} style={{ height: "98%" }}>
                <div className={classes.IconBox}>
                  <ThumbUpIcon
                    className={classes.iconDesign}
                    onClick={(e) => alert("Like clicked")}
                  />
                </div>
                <div className={classes.IconBox}>
                  <ThumbDownIcon
                    className={classes.iconDesign}
                    onClick={(e) => alert("DisLike clicked")}
                  />
                </div>
                {/* <Image
              src={Wheel}
              alt="Picture of the author"
              width={500}
              height={420}
              style={{marginTop:'10px'}}
            /> */}
              </Grid>
              <Grid item md={6} xs={12} style={{ position: "relative" }}>
                <div
                  style={{
                    height: "98%",
                    background: "grey",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <h1 className={classes.typo_design2}>Anything</h1>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={8} sm={12} className={classes.rightSection}>
          <div className={classes.songBox}>
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Classics</h1>
              </Grid>
              <Grid item md={9} xs={12} style={{ position: "relative" }}>
                <TextField
                  required
                  id="name"
                  type="text"
                  className={classes.inputField}
                  label="Classics"
                  variant="filled"
                  value={classics}
                  onChange={(e) => setClassics(e.target.value)}
                  name="name"
                  size="small"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.songBox}>
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Originals</h1>
              </Grid>
              <Grid item md={9} xs={12} style={{ position: "relative" }}>
                <TextField
                  required
                  id="name"
                  type="text"
                  className={classes.inputField}
                  label="Originals"
                  value={Original}
                  variant="filled"
                  onChange={(e) => setOriginal(e.target.value)}
                  name="name"
                  size="small"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.songBox}>
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Buttons</h1>
              </Grid>
              <Grid item md={9} xs={12} style={{ position: "relative" }}>
                <TextField
                  required
                  id="name"
                  type="text"
                  className={classes.inputField}
                  label="Buttons"
                  variant="filled"
                  value={buttons}
                  onChange={(e) => setButtons(e.target.value)}
                  name="name"
                  size="small"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.songBox}>
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Wheel</h1>
              </Grid>
              <Grid item md={9} xs={12} style={{ position: "relative" }}>
                <TextField
                  required
                  id="name"
                  type="text"
                  className={classes.inputField}
                  label="Wheel"
                  variant="filled"
                  onChange={(e) => setWheel(e.target.value)}
                  name="name"
                  size="small"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.songBox}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <TextField
                  id="name"
                  type="text"
                  multiline
                  rows={4}
                  className={classes.inputField}
                  label="Write Text Here..."
                  variant="filled"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  name="name"
                  size="small"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={2} xs={12} style={{ position: "relative" }}>
            <h1 className={classes.typo_design}>TESTIMONIAL</h1>
          </Grid>
          <Grid item md={8} xs={12} style={{ position: "relative" }}>
            <TextField
              id="name"
              type="text"
              className={classes.inputField}
              label="Write Text Here..."
              variant="filled"
              value={testimonial}
              onChange={(e) => setTestimonial(e.target.value)}
              name="name"
              size="small"
            />
          </Grid>
          <Grid item md={2} xs={12} style={{ position: "relative" }}>
            <Button
              className={classes.typo_design}
              style={{ marginLeft: "20px", width: "90%" }}
              onClick={Data}
            >
              SEND
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Feedback;
