import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import styles from '../styles/AdminPanel.module.css';
import router from 'next/router';
// import { makeStyles } from "@material-ui/core";
import { Typography, Box, Modal, makeStyles, Button } from "@material-ui/core";
import Image from "next/image";
import Iframe from "react-iframe";
import Logo from "../public/logo.png";
import Article from "../public/arcticle.jpg";
import axios from 'axios';
import mammoth from "mammoth";
import DocViewer from "react-doc-viewer";


// import shortid from "https://cdn.skypack.dev/shortid@2.2.16";


const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    width: "100%",
    background: "#fff",
    
  
  },
  mainContainer: {
    marginTop: "-30px",
    height: "90vh",
    paddingTop: "100px",
    background: "#fff !important",
  
  },
  cardSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "max-content",
    padding: "50px 100px 50px 100px",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
    borderRadius: "6px",
    overflow: "hidden",
    marginBottom: "30px",
    backgroundColor: "#fff",
    border: "none",
  },
  cardBody: {
    padding: "30px",
  },
  btnPrimary: {
    borderColor: "#5a8dee !important",
    backgroundColor: "#5a8dee !important",
    color: "#fff",
  },
  button: {
    backgroundColor: "#5a8dee",
    color: "#fff",
    padding: "10px 30px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#5a8dee",

  },
  },


  
});


const Library = () => {
  const [responseJson, setResponseJson] = useState(null);
  const [htmlContent, setHtmlContent] = useState(null);

  const classes = useStyles();

  const handleClose = (text) => {
    setOpenModel(false);
  };

  

  const [file, setFile] = useState()

//   function handleChange(event) {
//     setFile(event.target.files[0])
//   }

useEffect(() => {
  const fetchData = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "multipart/form-data");

      const formData = new FormData();
      formData.append("white-paper", 1);
      // Add your file to formData here if needed

      const requestOptions = {
        method: "POST",
        // headers: myHeaders,
        body: formData,
      };

      const response = await fetch(
        "https://absolutepitch.website/appdata/webservice.php",
        requestOptions
      );

      if (response.ok) {
        const responseJson = await response.json();
        console.log(responseJson, "response=======");

        if (responseJson.valid === 0) {
          alert(responseJson?.message);
        } else {
          setResponseJson(responseJson);
          const result = await mammoth.extractRawText({
            arrayBuffer: responseJson.data.link,
          });

          setHtmlContent(result.value);
        
          // alert("Uploaded Successfully");
        }
      } 
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // Call the API when the component mounts
  fetchData();
}, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount









  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // if (selectedFile && selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    //   setFile(selectedFile);
    // } else {
    //   alert("Please select a .docx file.");
    //   event.target.value = null; 
    //   setFile(null);
    // }
  };
  // Function to post the selected file to the API
  const postFileToAPI = async (event) => {
    event.preventDefault();
    if (!file) {
        alert("No file selected.");
        return;
      }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data");

   

    var formData = new FormData();
    formData.append("white-paper", 1);
    formData.append("link", file);
console.log(formData, 'file');
    const requestOptions = {
      method: "POST",
      // headers: myHeaders,
      body: formData,
    };

    try {
      const response = await fetch(
        "https://absolutepitch.website/appdata/webservice.php", // Add the "white-paper" parameter here
        requestOptions
      );
      if (response.ok) {
        const responseJson = await response.json();
        console.log(responseJson, 'response=======');

        if (responseJson.valid === 0) {
          alert(responseJson?.message);
        } else {
          setResponseJson(responseJson);

          alert('Uploaded Successfully');
       
        }
      } else {
        console.error("Failed to upload the file");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  return (
    <>

<div className={styles.mainContainer}>
              <div className={`${styles.main_container}`}>
<div className={classes.cardSection}>
         <form>
          <h1>White paper </h1>
          <p>See your file here</p>
          {/* <p>Please upload only .docx format</p>
          <input type="file" onChange={handleChange} />
          <button type="submit" onClick={postFileToAPI} className={classes.button}>Upload</button> */}
        </form>
        {/* {responseJson && (
            <DocViewer
              documents={[{ uri: responseJson.data.paper_link }]}
            />
          )} */}
  <a className={classes.button} style={{width: 'max-content', textDecoration: 'none'}} href={responseJson.data.paper_link} target="_blank" rel="noopener noreferrer">
    Open Document
  </a>
        </div>

      </div>

    </div>
    </>

  );
};

export default Library;
