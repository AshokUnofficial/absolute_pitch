import React, { useState, useEffect } from "react";
// import { setCookie } from "cookies-next";
import { Grid } from "@mui/material";
// import Image from "next/image";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
// import Guitar from "../public/assets/images/guitar.jpg";
// import dynamic from "next/dynamic";
import useStyles from "../utils/styles.module";

// import InitialVideo from '../public/video/homePageVideo.mp4'
import "./style.module.css";

const styles = makeStyles({
  root: {
    position: "relative",
  },
  videoCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "black !important",
    borderRadius: "10px",
    // padding: "20px",
    flexDirection: "column",
    width: "100%",
    height: "97.5vh",
    marginTop: "8px",
    position: 'relative',
    // "@media (min-width: 1280px) and (max-width:1480px)": { height: "135vh" },
    // "@media (min-width: 1481px) and (max-width:1920px)": { height: "110vh" },
    "@media (min-width: 600px) and (max-width:768px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (min-width: 380px) and (max-width:425px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (max-width:375px)": {
      margin: "25px 15px 15px 25px !important",
    },
    "@media (min-width: 1600px)and (max-width: 1920px)": {
      height: "98vh",
      width: '99.8%',
    }
  },
  playerDisplay: {
    objectFit: "cover",
    backgroundSize: "cover",
    // marginTop: "15px",

    // marginTop: "-4%",
    // "@media (min-width: 1280px) and (max-width:1480px)": {  marginTop: "-300px", },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginTop: "-180px",
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      // marginTop: "-400px",
    },
    video: {
      borderRadius: "10px"
    }
  },
  imgContainer: {
    position: 'absolute', bottom: '0', height: '350px', overflow: 'hidden',
    "@media (min-width: 1280px) and (max-width:1680px)": {
      height: '200px',
      borderRadius: '0px 0px 20px 20px',
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      height: '300px',
    },
  },
});

function VideoPlayer (prop) {
  // const [song, setSong] = useState();
  // const [totalSeconds, setTotalSeconds] = useState(0);
  const classes = styles();
  const tableClasses = useStyles();

  const music = prop.musicData?.length > 0
    ? prop.musicData[prop.musicIndex]["song_url"]
    : "";

  function playNextSong () {
    // prop.timeData(0)
    for (let i = prop.musicIndex + 1; i <= prop.musicData.length; i++) {
      prop.handleSong(prop.musicData, i);
      prop.TotleTimeAndImage(prop.musicData, i);
      break;
      // }
    }
    // if (prop.musicIndex === prop.musicData.length - 1) {
    //   prop.setAllImageCount(prop.totalCount);
    // }
  }
  return (
    <div>
      <Grid container spacing={2} style={{ display: 'block', position: 'relative' }}>
        <div className={classes.videoCard}>
          <Grid item style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "5px 0px",
            position: "absolute", 
            top: 0
          }}>
            <div className={tableClasses.songScrolling} style={{ opacity: '0.6'}}>
              <Grid
                container
                spacing={0}
                className={tableClasses.bottomBoxContainer}
                style={{ padding: "0px" }}
              >

                <Grid
                  item
                  xs={10}
                  md={12}
                  style={{ padding: "0px", marginLeft: "0px" }}
                >
                  <table className={tableClasses.tableStyle}>
                    <tbody>
                      <tr className={tableClasses.trStyle}>

                        <th className={tableClasses.thStyles}>{prop.songTitle}</th>
                        <th className={tableClasses.thStylesNew}>{prop.composer}</th>
                        <th className={tableClasses.thStylesNew}>{prop.songNote}</th>
                        <th className={tableClasses.thTotalSongs}>{prop.duration}</th>
                        <th className={tableClasses.thTotalSongs}>{prop.imageCount}</th>
                        <th className={tableClasses.thTotalSongs}>{prop.playSongposition}/{prop.totalSongs}</th>
                      </tr>
                    </tbody>
                  </table>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={12} style={{display: "flex", width: "100%", height: "100%"}}>
            {prop.musicData?.length > 0 ? (
              <ReactPlayer
                controls
                url={music}
                width="100%"
                height="100%"
                className={classes.playerDisplay}
                playing
                fluid={"true"}
                onEnded={playNextSong}
                stopOnUnmount
                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
              />

            ) : (
              <video width="100%" height="auto" controls>
                <source src='/video/homePageVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Grid>
        </div>

      </Grid>
    </div>
  );
}

export default VideoPlayer;;