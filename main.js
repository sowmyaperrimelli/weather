var button = document.querySelector('.button')
var placevalue = document.querySelector('.placevalue')


var name = document.querySelector('.place');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(placename) {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+placevalue.value+'&appid=66f803dd5130188e643117910fc5b461')
    .then(response => response.json())
    .then(data => {

   
        //var namevalue = data['name'];
        var tempvalue = data['main']['temp'];
        var tempvaluec = (tempvalue - 32) * (5/9);
        var descvalue = data['weather'][0]['description'];
        desc.innerHTML = `Description: ${descvalue}`;           
        temp.innerHTML = `Temperature: ${Math.round(tempvaluec * 100)/100} celsius`;
    })
    

    .catch(err => alert("entered wrong city name please type again"))
})




    




