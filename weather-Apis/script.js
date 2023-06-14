const url = "https://api.openweathermap.org/data/2.5/";

const key = "459978f449e2e183630f1b071ea81f60";


document.querySelector(".btn-search").addEventListener("click", () => {

    let city = document.querySelector(".input-control").value;
    if(!city == ""){
        getResault(city);
    }
    else{
        errorDisplay()
    }

})

const getResault = (cityName) =>{

    console.log(cityName)

    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;

    fetch(query)
    .then(weather => {

        return weather.json();

    })
    .then(displayResult)
    console.log(query)
}



const displayResult = (result) => {

    const html = `
        <div class="card-body">

            <div class="item city-name">${result.name} ${result.sys.country}</div>
            <div class="item city-weather">${(result.main.temp).toFixed(1)}°C</div>
            <div class="item weather-forecast">${result.weather[0].main}</div>

        </div>
    `;


    document.querySelector(".main-weather").innerHTML = html;

};

function errorDisplay(){
    document.querySelector(".error-msj").style.opacity=1;
    setTimeout(function() {
        document.querySelector(".error-msj").style.opacity=0;
    },3000)
}