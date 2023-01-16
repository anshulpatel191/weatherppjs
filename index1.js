// const http = require('http');
// const fs = require('fs');
// const requests = require('requests');

// const homeFile = fs.readFileSync('index.html', 'utf-8');

// const temp = document.getElementById('temp');

//         requests('https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=558bac09ea0da0cb3bfc0f47ce3196ea')
//             .on('data', function (chunk) {
//                 const obj = JSON.parse(chunk);
//                 temp.innerHTML = obj.weather[0].id;
//                 console.log(obj.weather[0].id);
//                 // res.write(homeFile);
//             })
//             .on('end', function (err) {
//                 if (err) return console.log('connection closed due to errors', err);
//                 // res.end();
//                 console.log('end');
//             });




        const curDate = document.getElementById("date");
        let weathercon = document.getElementById("weathercon");

        const tempStatus = "{%tempstatus%}";

        //condition to check sunny or cloudy
        if (tempStatus == "Sunny") {
            weathercon.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
        } else if (tempStatus == "Clouds") {
            weathercon.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        } else if (tempStatus == "Rainy") {
            weathercon.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else {
            weathercon.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
        }

        const getCurrentDay = () => {
            // var weekday = new Array(7);
            // weekday[0] = "Sunday";
            // weekday[1] = "Monday";
            // weekday[2] = "Tue";
            // weekday[3] = "Wed";
            // weekday[4] = "Thursday";
            // weekday[5] = "Friday";
            // weekday[6] = "Saturday";

            var weekday = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Satur"];

            let currentTime = new Date();
            let day = weekday[currentTime.getDay()];
            console.log(day);
            return day;
        };

        const getCurrentTime = () => {
            var months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
            ];

            var now = new Date();
            var month = months[now.getMonth() + 1];
            var date = now.getDate();

            let hours = now.getHours();
            let mins = now.getMinutes();

            let periods = "AM";

            if (hours > 11) {
                periods = "PM";
                if (hours > 12) hours -= 12;
            }
            if (mins < 10) {
                mins = "0" + mins;
            }

            return `${month} ${date} | ${hours}:${mins}${periods}`;
        };

        curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();

        const http = require('http');
        const fs = require('fs');
        const requests = require('requests');

        const homeFile = fs.readFileSync('index.html', 'utf-8');

        let temp = document.getElementById("temp");

        requests('https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=558bac09ea0da0cb3bfc0f47ce3196ea')
            .on('data', function (chunk) {
                const obj = JSON.parse(chunk);
                temp.innerHTML = obj.weather[0].id;
                console.log(obj.weather[0].id);
                // res.write(homeFile);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                // res.end();
                console.log('end');
            });



