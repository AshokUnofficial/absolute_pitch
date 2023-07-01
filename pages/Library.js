import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core";
import { Typography, Box, Modal, makeStyles, Button } from "@material-ui/core";
import Image from "next/image";
import Iframe from "react-iframe";
import Logo from "../public/logo.png";
import Article from "../public/arcticle.jpg";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
  },
  LibraryBoxs: {
    // border: "2px solid green",
    height: "100vh",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "98%",
    margin: "0 auto",
    // background: #A0C5E8,
    padding: "10px 0",
    marginTop: "5%",
  },

  spanBox: {
    width: "100px",
    height: "100px",
    background: "black",
  },
  spanBox1: {
    width: "100px",
    height: "100px",
    background: "lightblue",
    // padding: "5px",
    cursor: "pointer",
  },
  headingStyle: {
    fontSize: "30px",
    marginLeft: "40%",
  },
  headingStyle2: {
    fontSize: "25px",
    marginLeft: "20%",
  },
  cp_modal_body: {
    height: "70%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
});

const Library = () => {
  let path = "https://mylatinhome.com/absolute/note-sound/Am.wav";
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(path));
  const [openModel, setOpenModel] = useState(false);
  const classes = useStyles();
  const handleClose = (text) => {
    setOpenModel(false);
  };
  return (
    <Grid container spacing={0}>
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
                        width="100px"
                        height="100px"
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

          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
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
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
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
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
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
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
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
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
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
        <p className={classes.headingStyle} style={{ color: "#fff" }}>
          Media
        </p>
        <p className={classes.headingStyle2}>MP3/MP4 I Produce Thumbnail</p>
        <div className={classes.content}>
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
        </div>
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
      </Grid>
    </Grid>
  );
};

export default Library;
