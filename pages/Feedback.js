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
import Cookies from "js-cookie";
import { Alert } from "@mui/material";
import Link from "next/link";
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    background: "#fff",
  },
  containerBox: {
    width: "100%",
    boxSizing: "border-box",
    height: "100vh",
    padding: "10px",
    background: "#fff !important",
    "@media (min-width: 770px) and (max-width:1024px)": {
      height: "95%",
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: "1%",
      width: "90%",
      // border: "2px solid yellow",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      height: "125vh",
      // border: "2px solid blue",
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
  typo_design: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "15px",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
    background: "Navy",
    color: "#fff",
    borderRadius: "10px",
    padding: "20px",
    width: "80%",
    "@media (max-width: 958px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  typo_design2: {
    color: "#fff",
    width: "100%",
    boxSizing: 'border-box',
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    // color: "#000000",
    background: "Navy",
    // borderRadius: "20px",
    padding: "3px",
    // lineHeight: "50px",
    height: "fit-content",
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
    // padding: "18px 0px 18px 0px",
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
      background: "#FFF",
      padding: "0 10px",
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
      // transform: "translate(30px, 30px) scale(1)",
      fontSize: "19px",
    },
  },
  songBox: {
    width: "100%",
    height: "auto",
    // border: "2px solid yellow",
  },
  systemBox: {
    width: "100%",
    // height: "28vh",
    // background:'grey',
  },
  IconBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    // height: "50%",
    // background: "grey",
  },
  iconDesign: {
    color: "Navy",
    width: "50px !important",
    height: "50px !important",
    background: "#fff",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
  },
  imgBox: {
    width: "90% !important",
    height: "300px !important",
    minWidth: 'unset !important',
    minHeight: 'unset !important',
    margin: '0 !important'
  },
});
const Feedback = ({ setFeedback }) => {
  const classes = useStyles();
  const [classics, setClassics] = useState("");
  const [Original, setOriginal] = useState("");
  const [buttons, setButtons] = useState("");
  const [wheel, setWheel] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [about, setAbout] = useState("");
  const [like, setLike] = useState(false);
  const [disLike, setDislike] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [error, setError] = useState({
    classics: false,
    Original: false,
    buttons: false,
    wheel: false,
  });

  const Data = (e) => {
    if (!classics || !Original || !buttons || !wheel) {
      setError({
        classics: !classics,
        Original: !Original,
        buttons: !buttons,
        wheel: !wheel,
      });
      return false;
    }
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
      .then((response) => response.json())
      .then((result) => result.success ? setFormSuccess(true) : alert('Something went wrong! Please try again.'))
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      {!formSuccess ?
        <form id="my-form" style={{ overflowX: "auto", height: '92%' }}>
          <Grid container spacing={0} className={classes.containerBox}>
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              sx={12}
              className={classes.leftSection}
            >
              <div className={classes.systemBox}>
                <div style={{ width: "100%" }}>
                  <div>
                    {" "}
                    <h1 className={classes.typo_design2}>
                      Songs
                    </h1>
                  </div>
                  <Image
                    src={Songs}
                    alt="Picture of the author"
                    width="800"
                    height={190}
                  />
                </div>
              </div>
              <div className={classes.systemBox}>
                {/* <Grid container>
              <Grid item md={12} xs={12} className={classes.imgBox}>                 */}
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <h1 className={classes.typo_design2}>System</h1>
                </div>
                <Image
                  src={Wheel}
                  alt="Picture of the author"
                  width="800"
                  height={580}
                />
                {/* </Grid>
            </Grid> */}
              </div>
            </Grid>
            <Grid item xs={12} md={12} sm={12} className={classes.rightSection}>
              <div className={classes.systemBox}>
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "10px",
                  }}
                >
                  <h1 className={classes.typo_design2}>Fill The Below Details</h1>
                </div>
              </div>
              <div className={classes.songBox}>
                <Grid container spacing={1}>
                  {/* <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Classics</h1>
              </Grid> */}
                  <Grid item md={12} xs={12} style={{ position: "relative" }}>
                    <TextField
                      required
                      error={error.classics}
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
                  {/* <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Originals</h1>
              </Grid> */}
                  <Grid item md={12} xs={12} style={{ position: "relative" }}>
                    <TextField
                      required
                      error={error.Original}
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
                  {/* <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Buttons</h1>
              </Grid> */}
                  <Grid item md={12} xs={12} style={{ position: "relative" }}>
                    <TextField
                      required
                      error={error.buttons}
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
                  {/* <Grid item md={3} xs={12}>
                <h1 className={classes.typo_design}>Wheel</h1>
              </Grid> */}
                  <Grid item md={12} xs={12} style={{ position: "relative" }}>
                    <TextField
                      required
                      error={error.wheel}
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
                      minRows={2}
                      className={classes.inputField}
                      label="Write Your Thoughts"
                      variant="filled"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                      name="name"
                      size="small"
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.songBox}>
                <Grid container spacing={1}>
                  <Grid item md={12} xs={12} style={{ position: "relative" }}>
                    <TextField
                      id="name"
                      type="text"
                      multiline
                      minRows={2}
                      className={classes.inputField}
                      label="Testimonial"
                      variant="filled"
                      value={testimonial}
                      onChange={(e) => setTestimonial(e.target.value)}
                      name="name"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={12} xs={12} style={{ position: "relative", textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
                    <div className={classes.systemBox} style={{ position: "relative", textAlign: 'center', display: 'flex' }}>
                      <div className={classes.IconBox}>
                        <ThumbUpIcon
                          className={classes.iconDesign}
                          style={{
                            background: like ? '#d3e9cc' : ''
                          }}
                          onClick={(e) => {
                            setLike(prev => !prev);
                            setDislike(false);
                          }}
                        />
                      </div>
                      <div className={classes.IconBox}>
                        <ThumbDownIcon
                          className={classes.iconDesign}
                          style={{
                            background: disLike ? '#e9cccc' : ''
                          }}
                          onClick={(e) => {
                            setDislike(prev => !prev);
                            setLike(false);
                          }
                          }
                        />
                      </div>
                    </div>
                    <Button
                      className={classes.typo_design}
                      style={{ width: "30%" }}
                      onClick={Data}
                    >
                      SEND
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </form>
        :
        <Grid container spacing={0} className={classes.containerBox}>
          <div style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70vh', gap: '20px' }}>
            <Alert severity="success" style={{fontSize: '20px', alignItems: 'center'}}>Feedback Submitted Successfully!</Alert>
            <Link href='/'>
              <Button
                variant="outlined"
                style={{ width: "30%", fontSize: "15px" }}
              >
                Go To Player
              </Button>
            </Link>
            <Button
              variant="outlined"
              style={{ width: "30%" }}
              onClick={() => setFeedback(false)}
            >
              Close
            </Button>
          </div>
        </Grid>
      }
    </>
  );
};

export default Feedback;
