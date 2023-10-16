import "./styles.css";

const tempUnitItems = [
    { class: "celsius", text: "°C" },
    { class: "fahrenheit", text: "°F" }
];

const speedUnitItems = [
    { class: "kilometers", text: "km" },
    { class: "miles", text: "mi" }
];

document.addEventListener("DOMContentLoaded", function() {
    createNavItem("tempUnit", tempUnitItems);
    createNavItem("speedUnit", speedUnitItems);
    makeCurrInfo();
    makeForecast();
});

function createNavItem(container, items) {
    const ul = document.createElement("ul");
    ul.classList.add(container);

    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("navItem");
        li.classList.add(item.class);
        li.textContent = item.text;

        ul.append(li);

        if (index < items.length - 1) {
            const divider = document.createElement("li");
            divider.classList.add("divider");
            ul.append(divider);
        }
    });

    document.querySelector("nav").append(ul);
}

function fetchLeftInfo() {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=Toronto&days=1&aqi=no&alerts=no", {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            const localTimeEpoch = response.location.localtime_epoch * 1000;
            const localTimeDate = new Date(localTimeEpoch);
            
            const formattedDate = localTimeDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });

            const formattedTime = localTimeDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            });

            return [
                { class: "cityName", text: response.location.name + ", " + response.location.country },
                { class: "cityDate", text: formattedDate },
                { class: "cityTime", text: formattedTime },
                { class: "cityTemp", text: response.current.temp_c + "°C | Feels Like " + response.current.feelslike_c + "°C" },
                { class: "cityWeather", text: response.current.condition.text },
                { class: "weatherIcon", icon: response.current.condition.icon }
            ];
        });
}

function fetchRightInfo() {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=Toronto&days=1&aqi=no&alerts=no", {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            return [
                { class: "rightInfoTitle", text: "Humidity" },
                { class: "rightInfoNo", text: response.current.humidity + " % | " + "High" },
                { class: "rightInfoTitle", text: "Chance of Rain" },
                { class: "rightInfoNo", text: response.forecast.forecastday[0].day.daily_will_it_rain + " % | " + "None" },
                { class: "rightInfoTitle", text: "Chance of Snow" },
                { class: "rightInfoNo", text: response.forecast.forecastday[0].day.daily_will_it_snow + " % | " + "None" },
                { class: "rightInfoTitle", text: "Wind Speed" },
                { class: "rightInfoNo", text: response.current.wind_kph + " km/h | " + "Strong" }
            ];
        });
}

function makeCurrInfo() {
    const content = document.querySelector(".content");

    const currInfo = document.createElement("section");
    currInfo.classList.add("currInfo");

    const currInfoLeft = document.createElement("section");
    currInfoLeft.classList.add("currInfoLeft");

    fetchLeftInfo().then(function(result) {
        result.forEach((item) => {
            const textContainer = document.createElement("div");
            textContainer.classList.add(item.class);

            const iconContainer = document.createElement("img");
            iconContainer.classList.add(item.class);
    
            if (item.icon) {
                iconContainer.src = item.icon;

                currInfoLeft.append(iconContainer);
            } else {
                textContainer.textContent = item.text;

                currInfoLeft.append(textContainer);
            }
        });
    });    
    
    const currInfoRight = document.createElement("section");
    currInfoRight.classList.add("currInfoRight");

    fetchRightInfo().then(function(result) {
        result.forEach((item) => {
            const textContainer = document.createElement("div");
            textContainer.classList.add(item.class);
            textContainer.textContent = item.text;

            currInfoRight.append(textContainer);
        });
    });    

    currInfo.append(currInfoLeft, currInfoRight);
    content.append(currInfo);
}

function fetchForecast(num) {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=Toronto&days=7&aqi=no&alerts=no", {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            let forecastData = response.forecast.forecastday;

            return [
                { class: "forecastDate", text: forecastData[num].date },
                { class: "forecastMaxTemp", text: forecastData[num].day.maxtemp_c },
                { class: "forecastMinTemp", text: forecastData[num].day.mintemp_c },
                { class: "forecastWeather", text: forecastData[num].day.condition.text },
            ];
        });
}

function makeForecast() {
    const content = document.querySelector(".content");

    const forecastSection = document.createElement("section");
    forecastSection.classList.add("forecastSection");

    for (let i = 1; i < 7; i++) {
        const forecastCard = document.createElement("div");
        forecastCard.classList.add("forecastCard");
        
        fetchForecast(i).then(function(result) {
            result.forEach((item) => {
                const forecastData = document.createElement("div");
                forecastData.classList.add(item.class);
                forecastData.textContent = item.text;

                forecastCard.append(forecastData);
            });
        })

        forecastSection.append(forecastCard);
    }

    content.append(forecastSection);
}