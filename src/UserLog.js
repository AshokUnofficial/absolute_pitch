import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    // maxWidth: "99.8%",
    // border: "none",
    // height: "99vh",
  },
  sectonArea: {
    // width: "99%",
    // // float: "left",
    // height: "98vh",
    // border: "2px solid black",
  },
  para: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    width: "100%",
  },
  jss15: {
    color: 'white !important',
    width: '8%',
    cursor: 'pointer',
    height: '30px',
    fontSize: '7px',
    background: 'red',
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    textTransform: 'uppercase',
  },
  th: {
    top: 0,
    // marginTop: "-10px",
    position: "sticky",
    //  borderRight:'2px solid black',
    background: "#111",
    color: "white !important",
    width: "8%",
    height: "40px !important",
    fontSize: "13px",
    lineHeight: '0',

    "@media  (min-width: 300px) and (max-width: 450px)": {
      width: "8%",
      height: "20px",
      fontSize: "10px",
    },
    "@media  (min-width: 451px) and (max-width: 599px)": {
      width: "8%",
      height: "50px",
      fontSize: "12px",
    },
    "@media  (min-width: 600px) and (max-width: 1024px)": {
      width: "8%",
      height: "60px",
      fontSize: "11px",
    },
  },
  resetTh: {
    background: "red",
    color: "white !important",
    width: "8%",
    height: "30px",
    fontSize: "7px",
    cursor: "pointer",
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    textTransform: 'uppercase',
  },

  th2: {
    top: 0,
    // marginTop: "-10px",
    position: "sticky",
    //  borderRight:'2px solid black',
    background: "#fff",
    color: "#111 !important",
    width: "8%",
    height: "44px !important",
    fontSize: "17px",
    "@media  (min-width: 300px) and (max-width: 450px)": {
      width: "8%",
      height: "40px",
      fontSize: "20px",
    },
    "@media  (min-width: 451px) and (max-width: 599px)": {
      width: "8%",
      height: "50px",
      fontSize: "25px",
    },
    "@media  (min-width: 600px) and (max-width: 1024px)": {
      width: "8%",
      height: "50px",
      fontSize: "25px",
    },
  },
  tableDesign: {
    width: "100%",
    backgroundColor: "lightGray",
    // height: "57vh",
    "@media  (min-width: 300px) and (max-width: 450px)": {
      width: "70%",
      height: "80%",
    },
    "@media  (min-width: 451px) and (max-width: 599px)": {
      width: "70%",
      height: "80%",
    },
    "@media  (min-width: 600px) and (max-width: 1024px)": {
      width: "60%",
      height: "98%",
    },
  },
});
const UserLog = () => {
  const router = useRouter();
  // Cookies.remove("userId");
  const lang = Cookies.get("name");
  const userId = Cookies.get("userId");
  const classes = useStyles();

  const arrOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const arrTwo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const arrThree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [nordData, setNordData] = useState([]);
  const [reset, setReset] = useState('');
  const [miner, setMiner] = useState(false);
  const [major, setMajor] = useState(false);
  const dataArr = {
    c1: ["A", "Ab", "B", "Bb", "C", "D", "Db", "E", "Eb", "F", "G", "Gb"],
    c2: [
      "Am",
      "Abm",
      "Bm",
      "Bbm",
      "Cm",
      "Dm",
      "Dbm",
      "Em",
      "Ebm",
      "Fm",
      "Gm",
      "Gbm",
    ],
    c3: [
      "AM",
      "AbM",
      "BM",
      "BbM",
      "CM",
      "DM",
      "DbM",
      "EM",
      "EbM",
      "FM",
      "GM",
      "GbM",
    ],
  };

  const matchOne = dataArr["c1"].indexOf(`${lang}`);
  const matchTwo = dataArr["c2"].indexOf(`${lang}`);
  const matchThree = dataArr["c3"].indexOf(`${lang}`);
  // console.log(lang,'lang')
  useEffect(() => {
    fetchNodesData();
  }, []);

  const fetchNodesData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=974ee91d0edad978dc03bfadaa3ff9a6");

    var urlencoded = new URLSearchParams();
    urlencoded.append("log-report", "1");
    urlencoded.append("user_id", Cookies.get("userId"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://absolutepitch.website/itch/appdata/webservice.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === "0") {
          alert("Something went wrong! Please try again.");
        } else {
          setNordData(responseJson.data);
          // console.log(responseJson.data, "response..........");
        }
      });
  };

  const resetLogs = (data) => {
    // alert(data)
    data = data.join(',');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("reset-log", "1");
    urlencoded.append("user_id", Cookies.get("userId"));
    urlencoded.append("nodes", data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://absolutepitch.website/itch/appdata/webservice.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success == '0') {
          alert("Something went wrong! Please try again.");
        } else {
          fetchNodesData();
        }
      });
  };

  let j = 0;
  let lc1 = dataArr["c1"].length;
  let lc2 = dataArr["c2"].length;
  let lc3 = dataArr["c3"].length;

  for (j; j < lc1; j++) {

    nordData.map((val, ind) => {
      if (val.nodes == dataArr["c1"][j]) {
        arrOne[j] = Number(val.numberCount);
      }
      if (val.nodes == dataArr["c2"][j]) {
        arrTwo[j] = Number(val.numberCount);
      }
      if (val.nodes == dataArr["c3"][j]) {
        arrThree[j] = Number(val.numberCount);
      }
    });
  }

  // for(let j2 = 0 ;j2<lc2;j2++)
  // {

  //   nordData.map((val,ind)=>{
  //    if( val.nodes==dataArr["c1"][j2]){
  //     arrOne[j2] = val.numberCount
  //    }
  //    if(val.nodes==dataArr["c2"][j2])
  //    {
  //     arrTwo[j2] = val.numberCount
  //    }
  //    if(val.nodes==dataArr["c3"][j2]){
  //     arrThree[j2] = val.numberCount
  //    }
  //   })
  // }
  // for(let j3=0;j3<lc3;j3++)
  // {

  //   nordData.map((val,ind)=>{
  //    if( val.nodes==dataArr["c1"][j3]){
  //     arrOne[j3] = val.numberCount
  //    }
  //    if(val.nodes==dataArr["c2"][j3])
  //    {
  //     arrTwo[j3] = val.numberCount
  //    }
  //    if(val.nodes == dataArr["c3"][j3]){
  //     arrThree[j3] = val.numberCount
  //    }
  //   })
  // }


  return (
    <div className={classes.root}>
      <div
        className={classes.sectonArea}
        style={{
          // background: "#849191",
          alignItems: "center",
          marginLeft: "5px",
        }}
      >
        {/* <div className={classes.para}>
          <h3 style={{ color: "#fff" }}>User Log</h3>
        </div> */}
        {/* <Link href="/">
                <a onClick={(e) => router.push("/Library")}>Library</a>
              </Link> */}
        <table className={classes.tableDesign}>
          <tbody>
            <tr>
              {dataArr["c1"].map((val, ind) => (
                <th key={ind} className={classes.th}>
                  {val}
                </th>
              ))}
            </tr>

            <tr>

              {arrOne.map((val, ind) => (
                <th key={ind} className={classes.th2}>
                  {val}
                </th>
              ))}
              <th className={classes.jss15} onClick={() => resetLogs(dataArr['c1'])}>Reset</th>

            </tr>
            <tr>
              {dataArr["c2"].map((val, ind) => (
                <th key={ind} className={classes.th}>
                  {val}
                </th>
              ))}
            </tr>

            <tr>
              {arrTwo.map((val, ind) => (
                <th key={ind} className={classes.th2}>
                  {val}
                </th>
              ))}
              <th className={classes.jss15} onClick={() => resetLogs(dataArr['c2'])}>Reset</th>
            </tr>
            <tr>
              {dataArr["c3"].map((val, ind) => (
                <th key={ind} className={classes.th}>
                  {val}
                </th>
              ))}
            </tr>
            <tr>
              {arrThree.map((val, ind) => (
                <th key={ind} className={classes.th2}>
                  {val}
                </th>
              ))}
              <th className={classes.jss15} onClick={() => resetLogs(dataArr['c3'])}>Reset</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserLog;
