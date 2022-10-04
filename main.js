const button = document.querySelector('.button');
const input = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=953aea69fd04e5118320767efc5fc8b6')
.then(response => response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var cityValue = data['weather'][0]['description']
})
.catch(err => alert("Wrong City Name!"))
})