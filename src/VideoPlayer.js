import React, { useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import { Grid } from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";
import Guitar from "../public/assets/images/guitar.jpg";
import dynamic from "next/dynamic";
// import 'shaka-player/dist/controls.css';
// const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false });

const useStyles = makeStyles({
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
    height: "97.5vh",
    marginTop: "8px",
    position: 'relative',
    "@media (min-width: 1280px) and (max-width:1480px)": { height: "135vh" },
    "@media (min-width: 1481px) and (max-width:1920px)": { height: "110vh" },
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

    // marginTop: "-4%",
    // "@media (min-width: 1280px) and (max-width:1480px)": {  marginTop: "-300px", },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginTop: "-180px",
    },
    "@media (min-width: 720px) and (max-width:1024px)": {
      // marginTop: "-400px",
    },
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
  const classes = useStyles();

  const music = prop.musicData?.length > 0
    ? prop.musicData[prop.musicIndex]["song_url"]
    : "";
console.log(music)
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
        <Grid item xs={12} md={12} className={classes.videoCard} >
          {prop.musicData?.length > 0 ? (
            <ReactPlayer
              controls
              url={music}
              width="100vw"
              height="96vh"
              className={classes.playerDisplay}
              playing
              fluid={"true"}
              onEnded={playNextSong}
              stopOnUnmount
              // style={{ marginTop: "-50px" }}
              config={{ file: { attributes: { controlsList: 'nodownload' } } }}

            />

          ) : (
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GBYs4y1BtGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          )}
          {/* <div className={classes.imgContainer}><Image src={Guitar} alt="..."  /></div> */}
        </Grid>

      </Grid>
    </div>
  );
}

export default VideoPlayer;