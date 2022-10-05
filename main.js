const button = document.querySelector('input[type="submit"]');
const pullInfo = document.querySelector('input[type="text"]');
const display = document.querySelector('.display')

   
   
    button.addEventListener('click',function(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+pullInfo.value+'&APPID=953aea69fd04e5118320767efc5fc8b6')
.then((response) => response.json())
.then((data) => console.log(data)

    )})
   
    

