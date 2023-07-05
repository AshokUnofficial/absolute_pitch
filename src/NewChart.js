import Cookies from 'js-cookie';
import React, { useState, useEffect, useRef } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Chart from 'chart.js/auto'
const NewChart = () => {
  const [data, setData] = useState([]);
  const chartEl = useRef(null);

  useEffect(() => {
    var myHeaders = new Headers();
    const userId = Cookies.get("userId");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("report-graph", "1");
    urlencoded.append("user_id", userId);

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
        if (responseJson.success === '0') {
          alert("Something went wrong! Please try again.");
        } else {
          setData(responseJson.data);
        }
      });
  }, []);

  useEffect(() => {
    const ctx = chartEl.current.getContext("2d");
    const count = data.map(elm => elm.date)
    const mixedChart = new Chart(ctx, {
      data: {
        type: 'line',
        labels: count,
        datasets: [{
          type: 'line',
          label: 'Count',
          data: data.map(elm => elm.time),
          backgroundColor: '#C1272D',
          borderRadius: 30,
        }],
      },
      options: {
        responsive: true,
        onResize: (chartInstance) => {
          chartInstance.update();
        },
        maintainAspectRatio: false,
        barPercentage: 0.6,
        categoryPercentage: 0.3,
        scales: {
          y: {
            ticks: {
              display: 'auto',
            },
            beginAtZero: true,
          }
        },
        layout: {
          padding: 15,
        }
      }
    });
    return function cleanup () {
      mixedChart.destroy();
    };
  }, [data])

  return (
    <div style={{ background: '#fff', borderRadius: '10px', height: '100%'}}>
      <canvas id="line-chart" ref={chartEl}></canvas>
    </div>
  );
};

export default NewChart;