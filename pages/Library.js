import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
import { Typography, Box, Modal, makeStyles, Button } from "@material-ui/core";
import Image from "next/image";
import Iframe from "react-iframe";
import Logo from "../public/logo.png";
import Article from "../public/arcticle.jpg";
import axios from 'axios';


const dataTemp =  [
  {
    "id": "7",
    "title": "Vhal no Dariyo ",
    "youtube_link": "https://www.youtube.com/embed/261t7_T0NCo?si=WbabVcCD5teH0d5T",
    "description": "I am from maharashtra... Once I visited gujrat (himmatnagar) and my gujrati friend use to listen this song everyday..and I'm such obsessed with this ... Now I'm living in maharashtra and  I listen this song everyday",
    "date": "2023-08-25 11:29:55 AM"
  },
    {
      "id": "6",
      "title": "Vhal no Dariyo ",
      "youtube_link": "https://www.youtube.com/embed/261t7_T0NCo?si=WbabVcCD5teH0d5T",
      "description": "I am from maharashtra... Once I visited gujrat (himmatnagar) and my gujrati friend use to listen this song everyday..and I'm such obsessed with this ... Now I'm living in maharashtra and  I listen this song everyday",
      "date": "2023-08-25 11:29:55 AM"
    },
    {
      "id": "5",
      "title": "Vhal no Dariyo ",
      "youtube_link": "https://www.youtube.com/embed/261t7_T0NCo?si=WbabVcCD5teH0d5T",
      "description": "I am from maharashtra... Once I visited gujrat (himmatnagar) and my gujrati friend use to listen this song everyday..and I'm such obsessed with this ... Now I'm living in maharashtra and  I listen this song everyday",
      "date": "2023-08-25 11:29:34 AM"
    },
  {
    "id": "7",
    "title": "Vhal no Dariyo ",
    "youtube_link": "https://www.youtube.com/embed/261t7_T0NCo?si=WbabVcCD5teH0d5T",
    "description": "I am from maharashtra... Once I visited gujrat (himmatnagar) and my gujrati friend use to listen this song everyday..and I'm such obsessed with this ... Now I'm living in maharashtra and  I listen this song everyday",
    "date": "2023-08-25 11:29:55 AM"
  },
    {
      "id": "6",
      "title": "Vhal no Dariyo ",
      "youtube_link": "https://www.youtube.com/embed/261t7_T0NCo?si=WbabVcCD5teH0d5T",
      "description": "I am from maharashtra... Once I visited gujrat (himmatnagar) and my gujrati friend use to listen this song everyday..and I'm such obsessed with this ... Now I'm living in maharashtra and  I listen this song everyday",
      "date": "2023-08-25 11:29:55 AM"
    },
    {
      "id": "5",
      "title": "Vhal no Dariyo ",
      "youtube_link": "https://www.youtube.com/embed/261t7_T0NCo?si=WbabVcCD5teH0d5T",
      "description": "I am from maharashtra... Once I visited gujrat (himmatnagar) and my gujrati friend use to listen this song everyday..and I'm such obsessed with this ... Now I'm living in maharashtra and  I listen this song everyday",
      "date": "2023-08-25 11:29:34 AM"
    }
  ]




const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    
  
    
  },
  mainContainer: {
    height: "100%",
    background: "#fff",
  },
  LibraryBoxs: {
    border: "1px solid gray",
    gap : "10px",
    height: "auto",
    // height: "100vh",
    padding: "20px",
  },
  content: {
    height: "max-content",
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: "98%",
    margin: "0 auto",
    flexWrap: "wrap",
    gap: "25px",
    // background: #A0C5E8,
    padding: "10px 0",
    alignItems: "center",
    marginTop: "5%",
  },

  spanBox: {
    width: "125px",
    height: "125px",
    background: "black",
  },
  spanBox1: {
    width: "125px",
    height: "125px",
    background: "lightblue",
    // padding: "5px",
    cursor: "pointer",
  },
  headingStyle: {
    fontSize: "30px",
    // marginLeft: "40%",
    fontWeight: "bold", // You can add more inline styles here
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#333",
    textAlign: "center",

    
  },
  headingStyle2: {
    fontSize: "25px",
    // marginLeft: "20%",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },
  cp_modal_body: {
    height: "70%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "25px",
  },
  card: {
    borderRadius: "5px",
    width: "auto",
    height: "max-content",
    background: "#f0f0f0",
    padding: "10px",
    width: "420px",
    height: "max-content",
    marginBottom: "20px",


  },
  cardTitle: {
    height: "auto",
whiteSpace: "pre-wrap",
    margin: "4px",
  fontSize: "14px",
  fontWeight: "bold",
 
  },
});

const Library = () => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL to fetch
    const apiUrl = 'https://mylatinhome.com/absolute/appdata/webservice.php?library=1';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Store the fetched data in the 'data' state variable
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  
  



  let path = "https://mylatinhome.com/absolute/note-sound/Am.wav";
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(path));
  const [openModel, setOpenModel] = useState(false);
  const classes = useStyles();

  const handleClose = (text) => {
    setOpenModel(false);
  };
  return (
    <>
    {/* <div className="container">
    <h1>Video Cards</h1>
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card">
            <iframe
              width="560"
              height="315"
              src={item.youtube_link}
              title={item.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div> */}

<div className={classes.mainContainer}>
    <Grid container spacing={0} >
      <Grid
        item
        xs={12}
        md={4}
        sm={12}
        sx={12}
        className={classes.LibraryBoxs}
        style={{ background: "#fff" }}
      >
        <p className={classes.headingStyle}>Media</p>
        <p className={classes.headingStyle2}>YoutUbe/Rumble Links Thumbnail</p>


        <div className={classes.cardContainer}>
        {data ? (
        // Render data in cards when it's available
        data.data.video.map((item, index) => (
          <div className={classes.card}>
          <div className={classes.cardBody}>
            <p className={classes.cardTitle}>
            {item.title}
            </p>
            {/* <p className={classes.cardDescription}>
            {item.description}
            </p> */}
            </div>
            <iFrame
                width="420px"
                height="260px"
                src={item.youtube_link}
                title={item.title}
                
                allowFullScreen
              ></iFrame>
          </div>
         
        ))
      ) : (
        // Display a loading indicator or message when data is null
        <p>Loading...</p>
      )}
    

          
          {/* {dataTemp.map((item) => (
          <div className={classes.card}>
          <div className={classes.cardBody}>
            <p className={classes.cardTitle}>
            {item.title}
            </p>
          
            </div>
            <iFrame
                width="120px"
                height="120px"
                src={item.youtube_link}
                title={item.title}
                
                allowFullScreen
              ></iFrame>
          </div>
          ))} */}
          </div>
        <div className={classes.content}>
          <Modal
            open={openModel}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <div className={classes.cp_modal_body}>
                <div className="d-flex justify-content-center">
                  <div>
                    <span className={classes.spanBox}>
                      <Iframe
                        url="https://www.sdrive.app/embed/1ptBQD"
                        width="125px"
                        height="125px"
                        id=""
                        className=""
                        display="block"
                        position="relative"
                        onClick={(e)=>setOpenModel(true)}
                      />
                    </span>
                    <div
                      className="row justify-content-center p-4"
                      style={{ marginBottom: "10%" }}
                    >
                      <div
                        className="col-md-5"
                        style={{ marginRight: "25px", marginBottom: "10%" }}
                      >
                        <Button
                          style={{
                            width: "100%",
                            height: "45px",
                            fontFamily: "Nunito Sans",
                            fontSize: "20px",
                            fontWeight: "40",
                            color: "#212427",
                            backgroundColor: "#fff",
                            borderRadius: "20px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                            transition: "all 0.3s ease 0s",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleClose("create");
                          }}
                        >
                          close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  height: "30px",
                  marginLeft: "0px",
                  background: "#FAA61A",
                }}
              ></div>
            </Box>
          </Modal>
                
          {/* <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span> */}
        </div>
        {/* <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div> */}
        {/* <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="125px"
              height="125px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div> */}
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sm={12}
        sx={12}
        className={classes.LibraryBoxs}
        style={{ background: "#fff" }}
      >
        {/* <p className={classes.headingStyle} style={{ color: "#fff" }}>
          Media
        </p> */}
        <p className={classes.headingStyle}>Libraries</p>
        <p className={classes.headingStyle2}>MP3/MP4 I Produce Thumbnail</p>
        <div className={classes.cardContainer}>
        {data ? (
        // Render data in cards when it's available
        data.data.libraries.map((item, index) => (
          <div className={classes.card}>
          <div className={classes.cardBody}>
            <p className={classes.cardTitle}>
            {item.song_title}
            </p>
            {/* <p className={classes.cardDescription}>
            {item.description}
            </p> */}
            </div>
            <iFrame
                width="420px"
                height="260px"
                src={item.song_name}
                title={item.song_title}
                
                allowFullScreen
              ></iFrame>
          </div>
         
        ))
      ) : (
        // Display a loading indicator or message when data is null
        <p>Loading...</p>
      )}
      </div>
        {/* <div className={classes.content}>
          <span className={classes.spanBox1} onClick={() => audio.play()}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1} onClick={() => audio.play()}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div> */}
        {/* <div className={classes.content}>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox1}>
            {" "}
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div> */}
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sm={12}
        sx={12}
        className={classes.LibraryBoxs}
        style={{ background: "#fff" }}
      >
        <p className={classes.headingStyle}>Articles</p>
        <p className={classes.headingStyle2}>MP3/MP4 I Produce Thumbnail</p>
        <div className={classes.cardContainer}>
        {data ? (
        // Render data in cards when it's available
        data.data.articles.map((item, index) => (
          <div className={classes.card}>
          <div className={classes.cardBody}>
            <p className={classes.cardTitle}>
            {item.title}
            </p>
            {/* <p className={classes.cardDescription}>
            {item.description}
            </p> */}
            </div>
            <Image
            width={420}
            height={260}
              loader={myLoader}
              src={item.image}
              alt={item.title}
             />
          </div>
         
        ))
      ) : (
        // Display a loading indicator or message when data is null
        <p>Loading...</p>
      )}
      </div>
        {/* <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div> */}
        {/* <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{ marginTop: "10px" }}
            />
          </span>
        </div> */}
      </Grid>
    </Grid>
    </div>
    </>

  );
};

export default Library;
