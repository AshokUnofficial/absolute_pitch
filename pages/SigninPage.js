import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Button,
  Container,
  TextField,
} from "@material-ui/core";
import Image from "next/image";
import { Formik } from "formik";
import Cookies from "js-cookie";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Background from "../public/assets/images/blackboard.png";
import Logo from "../public/assets/images/logo.png";
import Link from "next/link";
import Loader from "components/Loader";
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    margin: "0",
    backgroundImage: `url(${Background.src})`,
    // border:'2px solid black',
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    // border: "2px solid red",
  },
  FormContainer: {
    justifyContent: "center",
    alignItems: "center",
    // display: "flex",
    // border: "2px solid red",
    height: "auto",
    width: "40%",
  },
  ImgContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "150px",
    //  border:'2px solid black'
  },
  innerContainer: {
    display: "block",
    border: "4px solid #fff",
    borderRadius: "20px",
    marginTop: "10%",
    padding: "20px 0px 0px 200px",
    // width: "30%",
  },
  inputField: {
    width: "75%",
    border: " 2px solid Navy !important",
    borderRadius: "10px",
    marginTop: "12px",
    padding: "10px 0px 10px 0px",
    background: "#fff",
    "&:active": {
      border: " 2px solid #fff !important",
      border: " 2px solid #fff !important",
    },
    "&:focus": {
      border: " 2px solid #fff !important",
      border: " 2px solid #fff !important",
    },
    "&:focus-within": {
      border: " 2px solid #fff !important",
      border: " 2px solid #fff !important",
    },
    "&:visited": {
      border: " 2px solid #fff !important",
      border: " 2px solid #fff !important",
    },
    "&:focus-visible": {
      border: " 2px solid #fff !important",
      border: " 2px solid #fff !important",
    },
    "&:target": {
      border: " 2px solid #fff !important",
      border: " 2px solid #fff !important",
    },

    "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
      transform: "translate(20px, -8px) scale(0.75)",
      background: "black",
      padding: "0 50px",
      color: "#fff",
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
      padding: "15px 20px 12px 25px !important",
      fontSize: "25px",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(30px, 30px) scale(1)",
      fontSize: "20px",
    },
  },
  songBox: {
    width: "100%",
    height: "17vh",
    // border: "2px solid yellow",
  },
  typo_one: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontSize: "25px",
    lineHeight: "30px",
  },

  typo_design: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "30px",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
    background: "#14de7c",
    color: "#fff",
    borderRadius: "20px",
    padding: "22px",
    width: "80%",
    "@media (max-width: 958px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
});
const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Cookies.get('userId')) {
      router.replace('/');
    } else {
      setIsLoading(false);
    }
  }, []);

  const LoginAccountSubmit = async (values) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("login", "1");
    urlencoded.append("email", email);
    urlencoded.append("password", pass);

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
      .then((responseJson) => {
        if (responseJson.success === 0) {
          alert(responseJson?.message);
        } else {
          // alert("Login Successfully");
          setUserId(responseJson?.data?.user_details?.id);
          Cookies.set("userId", responseJson?.data?.user_details?.id);
          Cookies.set("userName", responseJson?.data?.user_details?.name);
          router.push({
            pathname: "/",
          });
        }
      });
  };

  return (
    !isLoading ?
      <div className={classes.root}>
        <div className={classes.FormContainer}>
          <div className={classes.ImgContainer}>
            <Image
              src={Logo}
              alt="Picture of the author"
              width={300}
              height={200}
              style={{ marginTop: "2px", borderRadius: "20px" }}
            />
          </div>
          <div className={classes.innerContainer}>
            <div>
              <h1 style={{ color: "#fff" }}>LOGIN TO YOUR ACCOUNT</h1>
            </div>
            <div>
              <h3 style={{ color: "#fff" }} className={classes.typo_one}>
                Hey,Enter your details to get login to you account
              </h3>
            </div>
            <Formik
              initialValues={{
                email: "",
                passsword: "",
                cpasssword: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .max(50)
                  .required("Email ID is required.")
                  .email("Email ID is invalid."),
                passsword: Yup.string()
                  .required("No password provided.")
                  .min(4, "Password is too short - should be 4 chars minimum.")
                  .matches(
                    /[a-zA-Z]/,
                    "Password can only contain Latin letters."
                  ),
                cpasssword: Yup.string()
                  .required("No password provided.")
                  .min(4, "Password is too short - should be 4 chars minimum.")
                  .matches(
                    /[a-zA-Z]/,
                    "Password can only contain Latin letters."
                  ),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                const result = LoginAccountSubmit(values, null, 2);
              }}
            >
              {({
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                isValid,
                touched,
                values,
              }) => (
                <form id="my-form">
                  <div className={classes.songBox}>
                    <Grid container spacing={1}>
                      <Grid item md={12} xs={12} style={{ position: "relative" }}>
                        <TextField
                          required
                          id="email"
                          type="text"
                          className={classes.inputField}
                          label="Enter Email"
                          variant="filled"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          size="small"
                        />
                      </Grid>
                      <Grid item md={12} xs={12} style={{ position: "relative" }}>
                        <TextField
                          required
                          id="password"
                          type="text"
                          className={classes.inputField}
                          label="Password"
                          value={pass}
                          variant="filled"
                          onChange={(e) => setPass(e.target.value)}
                          name="password"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div>
                    <Button
                      className={classes.typo_design}
                      style={{ width: "75%", marginTop: "60px" }}
                      onClick={LoginAccountSubmit}
                    >
                      LOGIN
                    </Button>
                  </div>
                  <div>
                    <h3 style={{ color: "#fff" }} className={classes.typo_one}>
                      Dont have an account?<Link href='/SignupPage' style={{ color: '#fff !important', textDecoration: 'none' }}>Sign Up</Link>
                    </h3>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      :
      <Loader />
  );
};

export default SignIn;
