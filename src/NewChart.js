import Cookies from 'js-cookie';
import React, { useState, useEffect, useRef } from 'react';
import Chart from "react-apexcharts";

const NewChart = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    options: {},
    series: []
  });

  useEffect(() => {
    var myHeaders = new Headers();
    const userId = Cookies.get("userId");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("report-graph-new", "1");
    urlencoded.append("user_id", userId);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://mylatinhome.com/absolutepitch/appdata/webservice.php",
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
    const dates = data.map(elm => elm.date);
    const counts = data.map(elm => elm.time);

    var options = {
      options: {
        chart: {
          id: 'line-chart',
          toolbar:{
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        colors:["#80808057"],
        stroke: {
          show: true,
          width: 3,
      },
        markers: {
          size: 5,
          colors: '#e90d0d'
        },
        xaxis: {
          categories: dates,
        },
      },
      series: [{
        name: 'Count',
        data: counts,
      }],
    };
    setChartData(options);
  }, [data]);

  return (
    <div style={{ background: '#fff', borderRadius: '10px', width: '100%', height: '100%' }}>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={'100%'}
      />
    </div>
  );
};

export default NewChart;