import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import Cookies from 'js-cookie';
const Calendar = () => {
    const [data, setData] = useState([]);

    const fetchCalendarData = (start_date, end_date) => {
        var myHeaders = new Headers();
        const userId = Cookies.get("userId");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("report", "1");
        urlencoded.append("user_id", userId);
        urlencoded.append("start_date", start_date);
        urlencoded.append("end_date", end_date);

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
                    const eventsList = responseJson.data.map((elm, index) => {
                        return Object.values(elm)[0] > 0 ? Array(Number(Object.values(elm)[0])).fill({ title: `Session-${index + 1}`, date: Object.keys(elm)[0] })
                            : false;
                    }).filter(elm => elm).flat(1);
                    setData(eventsList);
                }
            });
    };

    // useEffect(() => {
    //     const date = new Date();
    //     let month = date.getMonth() + 1;
    //     month = month < 10 ? '0' + month : month;
    //     const year = date.getFullYear();

    //     const evenMonths = [4, 6, 10, 12];
    //     const oddMonths = [1, 3, 5, 7, 8, 9, 11];

    //     const start_date = `${year}-${month}-01`;
    //     const end_date = oddMonths.includes(month) ? `${year}-${month}-31` : evenMonths.includes(month) ? `${year}-${month}-30`: (month === 2 && year % 4 === 0) ?`${year}-${month}-29`: `${year}-${month}-28`;
    //     fetchCalendarData(start_date, end_date);
    // }, []);

    const handleMonthChange = (dateInfo) => {
        let month = Number(dateInfo.endStr.split('-')[1]);

        month = month === 1 ? 12 : month - 1;
        month = month < 10 ? '0' + month : month;
        let year = Number(dateInfo.startStr.split('-')[0]);
        year = month === 1 ? year + 1 : year;

        const evenMonths = [4, 6, 10, 12];
        const oddMonths = [1, 3, 5, 7, 8, 9, 11];

        const start_date = `${year}-${month}-01`;
        const end_date = oddMonths.includes(month) ? `${year}-${month}-31` : evenMonths.includes(month) ? `${year}-${month}-30` : (month === 2 && month % 4 === 0) ? `${year}-${month}-29` : `${year}-${month}-28`;
        fetchCalendarData(start_date, end_date);
    };

    return (
        <div style={{width: '100%', padding: '20px'}}>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={data}
                eventContent={() => {
                    return (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
                            <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                            <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                        </svg>
                    );
                }}
                dayMaxEventRows={4}
                eventBackgroundColor='transparent'
                eventBorderColor='transparent'
                eventClassNames='events-item'
                datesSet={(dateInfo) => handleMonthChange(dateInfo)}
            />
        </div>
    );
};

export default Calendar;
