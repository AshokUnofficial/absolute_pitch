import React from 'react'
import { useEffect } from "react"
import {
    makeStyles,
  } from "@material-ui/core";
  
import { Chart } from "chart.js";
const useStyles = makeStyles({
    root: {
      position: "relative",
      maxWidth: "100%",
      margin: "0",
      background:'#fff',
    },
    innerContainer: {
     width:'100%',
     height: "-webkit-fill-available",
    // height:'200px',
    },
  canvaStyle:{
width:'100%',
// height: "-webkit-fill-available !important",
height:'320px !important',
  },
  });
const LineChart = () => {
    const classes = useStyles();
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6",
                "Week 7",
                "Week 8",
                "Week 9",
                "Week 10"],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Applied",
                    borderColor: "rgb(62,149,205)",
                    backgroundColor: "rgb(62,149,205,0.1)",
                }, {
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Accepted",
                    borderColor: "rgb(60,186,159)",
                    backgroundColor: "rgb(60,186,159,0.1)",
                }, 
                ]
            },
        });
    }, [])

  return (
    <div className={classes.root}>
      {/* <div className="w-[800px] h-screen flex mx-auto my-auto"> */}
        <div className={classes.innerContainer}>
          <canvas id='myChart' className={classes.canvaStyle}></canvas>
        </div>
      {/* </div> */}
    </div>
  )
}

export default LineChart