const button = document.querySelector('input[type="submit"]');
const pullInfo = document.querySelector('input[type="text"]');
const display = document.querySelector('.display');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const description = document.querySelector('.desc');



   
    button.addEventListener('click',function(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+pullInfo.value+'&units=imperial&APPID=953aea69fd04e5118320767efc5fc8b6')
.then((response) => response.json())
.then((data) => {
    let nameValue = data['name'];
    let tempValue = data['main']['temp'];
    let descValue = data['weather'][0]['description'];
    
   name.innerHTML=nameValue;
   temp.innerHTML=tempValue + '°F';
   description.innerHTML=descValue;

})
.catch(err => alert("Wrong format"))


    })




