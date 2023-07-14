const getWeather=(city)=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=8e086601c7ce439016980d94be92cbf0&units=metric&q='+city)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cityName.innerHTML=`${city}`
            temp.innerHTML=`${Math.round(response.main.temp)}°c`
            max_min.innerHTML=`${Math.round(response.main.temp_min)} / ${Math.round(response.main.temp_max)} °c`
            humidity.innerHTML=`${response.main.humidity}%`
            wind.innerHTML=`${response.wind.speed}m\s`
            
            if(response.weather[0].main==="Clouds"){
                document.getElementById("weather").src="/images/clouds.png"
            }
            else if(response.weather[0].main==="Clear"){
                document.getElementById("weather").src="/images/clear.png"
            }
            else if(response.weather[0].main==="Drizzle"){
                document.getElementById("weather").src="/images/drizzle.png"
            }
            else if(response.weather[0].main==="Haze"){
                document.getElementById("weather").src="/images/humidity.png"
            }
            else if(response.weather[0].main==="Mist"){
                document.getElementById("weather").src="/images/mist.png"
            }
            else if(response.weather[0].main==="Rain"){
                document.getElementById("weather").src="/images/rain.png"
            }
            else if(response.weather[0].main==="Snow"){
                document.getElementById("weather").src="/images/snow.png"
            }
        })
        .catch(err => document.write("City doesn't exist"));
    }

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(city.value)
    getWeather(city.value)
})


