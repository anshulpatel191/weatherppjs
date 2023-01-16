const http = require('http');
const fs = require('fs');
const requests = require('requests');

let homeFile = fs.readFileSync('index.html', 'utf-8');

function repla(obj){
    homeFile = homeFile.replace('{%tempval%}',obj.main.temp);
    homeFile = homeFile.replace('{%location%}',obj.name);
    homeFile = homeFile.replace('{%country%}',obj.sys.country);
    homeFile = homeFile.replace('{%tempmin%}',obj.main.temp_min);
    homeFile = homeFile.replace('{%tempmax%}',obj.main.temp_max);
}
// const temp = document.getElementById('temp');
const server = http.createServer((req, res) => {

    if (req.url == '/') {

        requests('https://api.openweathermap.org/data/2.5/weather?q=Indore&appid=558bac09ea0da0cb3bfc0f47ce3196ea')
            .on('data', function (chunk) {
                const obj = JSON.parse(chunk);
                // temp.innerHTML = obj.weather[0].id;
                repla(obj);
                // homeFile = homeFile.replace('{%tempval%}',obj.weather[0].is
                console.log(obj.weather[0].id);
                res.write(homeFile);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                res.end();
                console.log('end');
            });

    }
})
server.listen(8000,'127.0.0.1');
