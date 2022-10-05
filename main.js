
fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=953aea69fd04e5118320767efc5fc8b6')
.then((response) => response.json())
.then((data) => console.log(data));

