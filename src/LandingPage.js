import React, { useState, useEffect } from "react";
import { Grid ,makeStyles} from "@material-ui/core";
import MusicWheel from "./MusicWheel";
import VideoPlayer from "./VideoPlayer";
// import { makeStyles } from "@material-ui/core";
import { Audio } from "react-loader-spinner";
import Cookies from "js-cookie";
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
  },
  containerBox: {
    // height: "auto",
    width: "99.5%",
    padding: "10px",
    background: "#808d8dcf !important",
    height: "96%",
    "@media (min-width: 770px) and (max-width:1024px)": {
      height: "95%",
      // border: "2px solid green",
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
  leftSection: {
    padding: "0px 5px 2px 0px",
  },
  rightSection: {
    padding: "0px 0px 2px 10px",
  },
});
function LandingPage() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  const [songTitle, setSongTitle] = useState("Title");
  const [songName, setSongName] = useState(
    "Racer X Real time Simulation Tech Demo"
  );
  const [composer, setComposer] = useState("composer");
  const [songNote, setSongNote] = useState("Note");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [allImageCount, setAllImageCount] = useState(0);
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [imageCount, setImageCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durationLast, setDurationLast] = useState(0);

  const [imageCountLast, setImageCountLast] = useState(0);
  const [playSongposition, setPlaySongposition] = useState(0);
  const [allsongTime, setAllsongTime] = useState(0);
  const [allSongsDuration, setAllSongsDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const nordArray = {
    A: 0,
    Ab: 0,
    B: 0,
    Bb: 0,
    C: 0,
    D: 0,
    Db: 0,
    E: 0,
    Eb: 0,
    F: 0,
    G: 0,
    Gb: 0,
    Am: 0,
    Abm: 0,
    Bm: 0,
    Bbm: 0,
    Cm: 0,
    Dm: 0,
    Dbm: 0,
    Em: 0,
    Ebm: 0,
    Fm: 0,
    Gm: 0,
    Gbm: 0,
    AM: 0,
    AbM: 0,
    BM: 0,
    BbM: 0,
    CM: 0,
    DM: 0,
    DbM: 0,
    EM: 0,
    EbM: 0,
    FM: 0,
    GM: 0,
    GbM: 0,
  };
  if (!Cookies.get("nordArray")) {
    Cookies.set("nordArray", nordArray);
  }

// ***********Handle song start here **************
  function handleSong(songsData, ind) {
    // setTimeout( setAllSongsDuration(0),
    // setTime(0),200)
    if (durationLast === 0) {
      setDurationLast(Number(songsData[0].duration));
    }
    if (totalCount === 0) {
      setTotalCount(Number(songsData[0].no_of_images));
    }
    // if(allImageCount === 0){
    //   setAllImageCount(Number(songsData[0].no_of_images))
    // }
    if (playSongposition === 0) {
      setPlaySongposition(1);
    }
    setData(songsData);
    
    // setIndex(ind);
    setSongTitle(songsData[ind].song_title);
    setComposer(songsData[ind].composer);
    setSongNote(songsData[ind].note_or_cord);
    setSongName(songsData[ind].song_name);
    setImageCount(songsData[ind].no_of_images);
    setDuration(songsData[ind].tempo);
    // setPlaySongposition(++ind);
    // setDuration(secondsToHms(songsData[ind].tempo));
    
    for (let x in songsData) {
      setAllSongsDuration(
        (allSongsDuration) => allSongsDuration + parseInt(songsData[x].duration)
      );
    }
    const getNextSong = document.getElementById("childid").children[ind];
    getNextSong?.scrollIntoView();
    GetSongNord(songsData[ind].note_or_cord, 0);
  }
  //****** Handle song End here *************

  useEffect(() => {
    for (let x in data) {
      setAllSongsDuration(
        (allSongsDuration) => allSongsDuration + parseInt(data[x].duration)
      );
    }
    let r = remainingTimes(allSongsDuration, durationLast);
    setRemainingTime(r);
  },[data]);

  // *********** TotleTimeAndImage start here **************

  function TotleTimeAndImage(data, index) {
    setIndex(index);
    setPlaySongposition(index + 1);
    setDurationLast(
      (durationLast) => durationLast + parseInt(data[index].duration)
    );
    setImageCountLast(data[index].no_of_images);
    setTotalCount(
      (totalCount) => totalCount + parseInt(data[index].no_of_images)
    );
    setAllImageCount(totalCount);
    allImageCount > 10000 ? setTotalCount(0) : "";
    // remainingTimes(time,durationLast)
    
  }

  // *********** TotleTimeAndImage End here **************
  function GetSongNord(note_or_cord, type=0) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=6f62aaae4d06c1d0536d68ffef95a969");
    // console.log(Cookies.get("userId"),'Cookies.get("userId").......')
    var urlencoded = new URLSearchParams();
    urlencoded.append("create-log", "1");
    urlencoded.append("user_id", Cookies.get("userId"));
    urlencoded.append("action", note_or_cord);
    urlencoded.append("log", "music start");
    urlencoded.append("type", type);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://mylatinhome.com/absolute/appdata/webservice.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        if(!JSON.parse(sessionStorage.getItem('session'))){
          sessionStorage.setItem("session", true);
          GetSongNord(songNote, 1);
        }
      })
      .catch(error => console.log('error', error));
  }
  
  Cookies.set("nordArray", JSON.stringify(nordArray));

  useEffect(() => {
    setCurrentSongTime(durationLast);
  }, [durationLast]);

  // UseEffect for total image count

  // useEffect(() => {
  //   setAllImageCount(totalCount);
  // }, [totalCount]);

  // UseEffect for total song duration
  

  //set updated total time
  useEffect(() => {
    setTime(allSongsDuration);
  }, [allSongsDuration]);

  useEffect(() => {
    let r = remainingTimes(allSongsDuration, durationLast);
    setRemainingTime(r);
  }, [durationLast]);


  function remainingTimes(x, y) {
    let d = Number(x) - Number(y);
    const result = new Date(d * 1000).toISOString().slice(11, 19);
    // console.log(result,'result...'); // 👉️ "00:10:00" (hh:mm:ss)
    return result;

  }

  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.containerBox}>
      <Grid item xs={12} md={6} sm={12} sx={12} className={classes.leftSection}>
        <MusicWheel
          handleSong={handleSong}
          musicData={data}
          musicIndex={index}
          id="childid"
          songTitle={songTitle}
          setSongTitle={setSongTitle}
          songName={songName}
          composer={composer}
          setComposer={setComposer}
          songNote={songNote}
          setSongNote={setSongNote}
          allImageCount={allImageCount}
          duration={duration}
          setDuration={setDuration}
          durationLast={currentSongTime}
          imageCount={imageCount}
          setImageCount={setImageCount}
          playSongposition={playSongposition}
          setAllImageCount={setAllImageCount}
          setTotalSeconds={setTotalSeconds}
          remainingTime={remainingTime}
          tduration={time}
          setPlaySongposition={setPlaySongposition}
          allsongTime={allsongTime}
          timeData={setAllSongsDuration}
        />
      </Grid>
      <Grid item xs={12} md={6} sm={12} className={classes.rightSection}>
        <VideoPlayer
          handleSong={handleSong}
          musicData={data}
          musicIndex={index}
          TotleTimeAndImage={TotleTimeAndImage}
          timeData={setAllSongsDuration}
          setAllImageCount={setAllImageCount}
          totalCount={totalCount}
        />
      </Grid>
    </Grid>
  );
}

export default LandingPage;