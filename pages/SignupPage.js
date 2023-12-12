import React, { useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Button,
  Container,
  TextField,
} from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import Background from "../public/assets/images/blackboard.jpg";
import john from "../public/assets/images/john.gif";
import jackson from "../public/assets/images/jackson.gif";
import Logo from "../public/assets/images/logo.png";
import Cookies from "js-cookie";
import Loader from "components/Loader";

const useStyles = makeStyles({
  body: {
    height: "100%",
    margin: "0",
    padding: "0",
  },
  root: {

    position: "relative",
    maxWidth: "100%",
    margin: "0",
    // gap: "50px",

    backgroundImage: `url(${Background.src})`,
    backgroundSize: 'cover',
    // border:'2px solid black',
    height: "100vh",
    // height: "max-content",
    justifyContent: "space-evenly",
    alignItems: "center",
    display: "flex",
       // padding: "10px",
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
    height: "120px",
    //  border:'2px solid black'
  },
  innerContainer: {
   
    height: '535px',
    display: "block",
    border: "4px solid #fff",
    borderRadius: "20px",
    // marginTop: "10%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    // padding: "20px 0px 0px 200px",
    // width: "30%",
  },
  typo_one: {
    // fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontSize: "22px",
    lineHeight: "30px",
    // textAlign: "center",
    // alignItems: "center",
  },
  typo_one_link: {
    color: "#6666d9 !important",
    transition: 'color 0.3s', // Add a smooth transition for color change
    '&:hover': {
      color: '#d35252 !important', // Change to your desired hover color
    },
  },
  inputField: {
    height: "28px",
    width: "75%",
    border: " 2px solid Navy !important",
    borderRadius: "10px",
    marginTop: "0px",
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
      fontSize: "23px",
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(30px, 30px) scale(1)",
      fontSize: "18px",
      margin: "-5px",
    },
  },
  songBox: {
    width: "100%",
    height: "17vh",
    // border: "2px solid yellow",
  },

  sideimgp: {
    // fontFamily: 'Dancing Script',

    fontStyle: "normal",
    fontWeight: "600",
    // fontSize: "36px",
    fontSize: "26px",
    lineHeight: "30px",
    textAlign: "center",
    alignItems: "center",
    color: "white",
  },
  typo_design: {
    height: "50px",
    // fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    // fontSize: "36px",
    fontSize: "26px",
    lineHeight: "30px",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#fff",
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
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male"); // Set a default value
  const [name, setName] = useState("");
  const classes = useStyles();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Cookies.get('userId')) {
      router.replace('/');
    } else {
      setIsLoading(false);
    }
  }, []);

  const RagisterAccountSubmit = async (values) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("registration", "1");
    urlencoded.append("email", email);
    urlencoded.append("password", pass);
    urlencoded.append("name", name);
    urlencoded.append("dob", dob);
    urlencoded.append("gender", gender);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://absolutepitch.website/appdata/webservice.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.valid === 0) {
          alert(responseJson?.message);
        } else {
          alert('Register Successfully');
          router.push({
            pathname: "/SigninPage",
          });
          Cookies.set("userName", responseJson?.data?.user_details?.name);
          Cookies.set("dob", responseJson?.data?.user_details?.dob);
          Cookies.set("gender", responseJson?.data?.user_details?.gender);
        }
      });
  };

  const validateEmail = (email) => {
    if ((/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)) {
      return true;
    } else {
      return false;
    }
  };

  // const SignupPge = () => {
  //   router.push("/SigninPage");
  // };
  return (
    !isLoading ?
      <div className={classes.root}>
        <div className={classes.sideimg}>
             <Image
              
              src={jackson}
              alt="Picture of the author"
              width={200}
              height={200}
              style={{ mixBlendMode: 'plus-lighter' }}
              loop={false}
            />
            <p className={classes.sideimgp}> Michael Jackson</p>
            </div>
        <div className={classes.FormContainer}>
          <div className={classes.ImgContainer}>
            <Image
              src={Logo}
              alt="Picture of the author"
              width={120}
              height={120}
              style={{ marginTop: "2px", borderRadius: "20px" }}
            />
          </div>
          <div className={classes.innerContainer}>
            <div>
              <h1 style={{ color: "#fff" , margin: "0px" }}>Welcome!  Sign up to access your account</h1>
            </div>
            <div>
              <h3 style={{ color: "#fff" , margin: "10px 0px" }} className={classes.typo_one}>
                Hey,Enter your details to get signup to you account
              </h3>
            </div>
            <Formik
              initialValues={{
                email: "",
                passsword: "",
                cpasssword: "",
                dob: "",      
                gender: "", 
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
                  dob: Yup.string()
      .required("Date of Birth is required."),
    gender: Yup.string()
      .required("Gender is required."),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                const result = RagisterAccountSubmit(values, null, 2);
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
                <form id="my-form" onSubmit={handleSubmit}>
                  <div className={classes.songBox}>
                    <Grid container spacing={1} style={{ height: "max-content", gap: "10px" }}>
               
                    <Grid item md={12} xs={12} style={{ position: "relative" , display: "flex" , justifyContent: "center"  }}>
                      <TextField
                        required
                        id="name"
                        type="text"
                        className={classes.inputField}
                        error={Boolean(
                          touched.name && errors.name
                        )}
                        helperText={
                          touched.name && errors.name
                        }
                        label="Name"
                        value={name}
                        variant="filled"
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        size="small"
                      />
                    </Grid>
                    <Grid item md={12} xs={12} style={{ position: "relative" , display: "flex" , justifyContent: "center", }}>
                      <TextField
                        required
                        id="email"
                        type="email"
                        className={classes.inputField}
                        label="Email"
                        value={email}
                        variant="filled"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        size="small"
                      />
                    </Grid>
                    <Grid item md={12} xs={12} style={{ position: "relative"  , display: "flex" , justifyContent: "center" }}>
                      <TextField
                        required
                        id="passsword"
                        type="password"
                        className={classes.inputField}
                        label="Password"
                        value={pass}
                        variant="filled"
                        onChange={(e) => setPass(e.target.value)}
                        name="passsword"
                        size="small"
                      />

                    </Grid>
                    <Grid item md={12} xs={12} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
  <TextField
    required
    id="dob"
    type="date"   // Use type="date" for Date of Birth
    className={classes.inputField}
    label=""
    value={dob}
    variant="filled"
    onChange={(e) => setDob(e.target.value)}
    name="dob"
    size="small"
  />
</Grid>

<Grid item md={12} xs={12} style={{ position: "relative", display: "flex", justifyContent: "space-evenly" , color: 'white' }}>
  <label>Gender:</label>
  <div>
    <input
      type="radio"
      id="male"
      name="gender"
      value="male"
      checked={gender === "male"}
      onChange={() => setGender("male")}
    />
    <label htmlFor="male">Male</label>
  </div>
  <div>
    <input
      type="radio"
      id="female"
      name="gender"
      value="female"
      checked={gender === "female"}
      onChange={() => setGender("female")}
    />
    <label htmlFor="female">Female</label>
  </div>
</Grid>
                    <Grid item md={12} xs={12} style={{ position: "relative" , display: "flex" , justifyContent: "center" }}>
                  {/* <div> */}
                    <Button
                      className={classes.typo_design}
                      style={{ width: "75%", marginTop: "12px" }}
                      onClick={RagisterAccountSubmit}
                      disabled={name === "" || pass === '' || email === '' || !validateEmail(email)}
                      title={(name === "" || pass === '' || email === '' || !validateEmail(email)) ? "Please fill all the required field." : "Register"}
                    >
                      SIGN UP
                    </Button>
                  {/* </div> */}
                  </Grid>
                  <Grid item md={12} xs={12} style={{ position: "relative" , display: "flex" , justifyContent: "center"}}>
                  {/* <div>
                  
                    <h3 style={{ color: "#fff", margin: "0px", paddingTop: '10px' }} className={classes.typo_one}>
                      Dont have an account?<a href='/SigninPage' className={classes.typo_one_link}>Sign In</a>
                    </h3>
                    
                  </div> */}
                    </Grid>
                    </Grid>
                  </div>

       
                 
                  
                  
                  
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className={classes.sideimg}>
             <Image
              
              src={john}
              alt="Picture of the author"
              width={200}
              height={200}
              style={{ mixBlendMode: 'plus-lighter' }}
            />
            <p className={classes.sideimgp}>Elton John</p>
            </div>
      </div>
      :
      <Loader />
  );
};

export default SignUp;
