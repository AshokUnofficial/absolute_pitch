import React, { useState } from "react";
import Image from "next/image";
import Wheel from "../public/assets/images/wheel.png";
import Songs from "../public/assets/images/songs.png";
import DurationDefault from "../public/assets/images/Duration.png";
import Intencity from "../public/assets/images/Intencity.png";
import Tempo from "../public/assets/images/Tempo 1st.png";
import Mix from "../public/assets/images/Mix.png";
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
  Checkbox,
  FormControlLabel,
  FormHelperText
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
    width: "100% !important",
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
    lineHeight: "1.1 !important",
    width: "100%",
    border: " 2px solid Navy",
    borderRadius: "10px",
    marginTop: "12px",
    "&:active": {
      border: " 2px solid Navy",
    },
    "&:focus": {
      border: " 2px solid Navy",
    },
    "&:focus-within": {
      border: " 2px solid Navy",
    },
    "&:visited": {
      border: " 2px solid Navy",
    },
    "&:focus-visible": {
      border: " 2px solid Navy",
    },
    "&:target": {
      border: " 2px solid Navy",
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
      padding: "0px 20px 12px 25px !important",
      fontSize: "25px",
      lineHeight: 1.3,
      latterSpacing: "1.2px",
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
    textAlign: "center",
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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [about, setAbout] = useState("");
  const [like, setLike] = useState(false);
  const [disLike, setDislike] = useState(false);
  const [testimonialApprove, setTestimonialApprove] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [error, setError] = useState({
    classics: false,
    Original: false,
    buttons: false,
    email: false,
    name: false,
    testimonialApprove: false,
  });

  const Data = (e) => {
    if (!classics || !Original || !buttons || !name || !email || !testimonialApprove) {
      setError({
        classics: !classics,
        Original: !Original,
        buttons: !buttons,
        email: !email,
        name: !name,
        testimonialApprove: !testimonialApprove
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
    urlencoded.append("email", email);
    urlencoded.append("name", name);
    urlencoded.append("testimonialApprove", testimonialApprove);
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
            <Grid item xs={12} md={12} sm={12} className={classes.rightSection}>
              <div className={classes.songBox}>
                <Grid container spacing={3}>
                  <Grid item md={2} xs={2} style={{ display: "flex", padding: "22px 10px 10px 10px" }}>
                    <Image src={DurationDefault} style={{ backgroundColor: "black" }} height={100} />
                  </Grid>
                  <Grid item md={10} xs={10} style={{ position: "relative" }}>
                    <TextField
                      required
                      error={error.classics}
                      id="name"
                      type="text"
                      placeholder="Anything You Would Like Us To Change"
                      multiline
                      maxRows={2}
                      minRows={2}
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
                <Grid container spacing={3}>
                  <Grid item md={2} xs={2} style={{ display: "flex", padding: "22px 10px 10px 10px" }}>
                    <Image src={Intencity} style={{ backgroundColor: "black" }} height={100} />
                  </Grid>
                  <Grid item md={10} xs={10} style={{ position: "relative" }}>
                    <TextField
                      required
                      error={error.Original}
                      id="name"
                      type="text"
                      multiline
                      maxRows={2}
                      minRows={2}
                      className={classes.inputField}
                      label="Originals"
                      placeholder="Anything You Would Like Us To Change"
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
                <Grid container spacing={3}>
                  <Grid item md={2} xs={2} style={{ display: "flex", padding: "22px 10px 10px 10px" }}>
                    <Image src={Tempo} style={{ backgroundColor: "black" }} height={100} />
                  </Grid>
                  <Grid item md={10} xs={10} style={{ position: "relative" }}>
                    <TextField
                      required
                      error={error.buttons}
                      id="name"
                      type="text"
                      multiline
                      maxRows={2}
                      minRows={2}
                      className={classes.inputField}
                      placeholder="Suggestions for tempo changes, song and suggested tempo"
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
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="name"
                      type="text"
                      multiline
                      maxRows={6}
                      minRows={6}
                      className={classes.inputField}
                      label="Anything You Would Like Us To Change"
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
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12} style={{ position: "relative" }}>
                    <TextField
                      id="name"
                      type="text"
                      multiline
                      maxRows={6}
                      minRows={6}
                      className={classes.inputField}
                      label="Testimonial"
                      variant="filled"
                      value={testimonial}
                      onChange={(e) => setTestimonial(e.target.value)}
                      name="name"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6} xs={6} style={{ position: "relative" }}>
                    <TextField
                      id="name"
                      type="text"
                      required
                      error={error.email}
                      className={classes.inputField}
                      style={{ paddingTop: "10px" }}
                      label="Email"
                      variant="filled"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="name"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={6} xs={6} style={{ position: "relative" }}>
                    <TextField
                      id="name"
                      type="text"
                      required
                      error={error.name}
                      className={classes.inputField}
                      style={{ paddingTop: "10px" }}
                      label="First Name Last Initial"
                      variant="filled"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      size="small"
                    />
                  </Grid>
                  <Grid item md={12} xs={12} style={{ position: "relative" }}>
                    <FormControlLabel
                      label="I Approve The Public Use Of This Testimonial"
                      control={
                        <Checkbox
                          required
                          size="medium"
                          checked={testimonialApprove}
                          onChange={(e) => setTestimonialApprove(e.target.checked)}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />
                      } />
                    {testimonial.length > 0 && !testimonialApprove ?
                      <FormHelperText style={{ color: "red" }}>You have not provided your approvel yet.</FormHelperText>
                      : null}
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
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70vh', gap: '20px' }}>
            <Alert severity="success" style={{ fontSize: '20px', alignItems: 'center' }}>Feedback Submitted Successfully!</Alert>
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