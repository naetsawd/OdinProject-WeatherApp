import "./styles.css";

const tempUnitItems = [
    { class: "celsius", text: "°C" },
    { class: "fahrenheit", text: "°F" }
];

const speedUnitItems = [
    { class: "kilometers", text: "km" },
    { class: "miles", text: "mi" }
];

const forecastOpt = [
    { class: "daily", text: "Daily" },
    { class: "hourly", text: "Hourly" }
];

document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("city")) {
        localStorage.setItem("city", "toronto")
    }

    if (!localStorage.getItem("tempUnit")) {
        localStorage.setItem("tempUnit", "°C")
    }

    if (!localStorage.getItem("speedUnit")) {
        localStorage.setItem("speedUnit", "km")
    }

    if (!localStorage.getItem("forecast")) {
        localStorage.setItem("forecast", "daily")
    }

    createNavItem("forecastOpt", forecastOpt);
    createNavItem("tempUnit", tempUnitItems);
    createNavItem("speedUnit", speedUnitItems);
    makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
    makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    searchFunction();
    switchForecast();
    switchTemp();
    switchSpeed();
    chosenUnit();
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

function chosenUnit() {
    const units = document.querySelectorAll(".navItem");

    units.forEach((unit) => {
        unit.classList.remove("chosenUnit");
    })

    if (localStorage.getItem("forecast") === "daily") {
        units[0].classList.add("chosenUnit")
    } else {
        units[1].classList.add("chosenUnit")
    }

    if (localStorage.getItem("tempUnit") === "°C") {
        units[2].classList.add("chosenUnit")
    } else {
        units[3].classList.add("chosenUnit")
    }

    if (localStorage.getItem("speedUnit") === "km") {
        units[4].classList.add("chosenUnit")
    } else {
        units[5].classList.add("chosenUnit")
    }
}

async function searchFunction() {
    const content = document.querySelector(".content");
    const searchCont = document.querySelector(".searchContainer");
    const searchBox = document.querySelector(".searchBox");
    const searchBtn = document.querySelector(".searchBtn");

    searchBtn.onclick = async function() {
        if (searchBox.value.trim()) {
            searchCont.classList.remove("invalidSearch");
            searchBox.placeholder = "Search";

            localStorage.setItem("prevCity", localStorage.getItem("city"));
            localStorage.setItem("city", searchBox.value);

            content.innerHTML = '';
            searchBox.value = "";
            await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
            await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));  
        } else {
            searchCont.classList.add("invalidSearch");
            searchBox.placeholder = "Please enter a name";
        }
    }
}

async function switchForecast() {
    const forecastSection = document.querySelector(".forecastSection");
    const daily = document.querySelector(".daily");
    const hourly = document.querySelector(".hourly");

    daily.onclick = async function() {
        localStorage.setItem("forecast", "daily");

        forecastSection.innerHTML = '';
        chosenUnit();
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }

    hourly.onclick = async function() {
        localStorage.setItem("forecast", "hourly");

        forecastSection.innerHTML = '';
        chosenUnit();
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }
}

async function switchTemp() {
    const content = document.querySelector(".content");
    const C = document.querySelector(".celsius");
    const F = document.querySelector(".fahrenheit");

    C.onclick = async function() {
        localStorage.setItem("tempUnit", "°C");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }

    F.onclick = async function() {
        localStorage.setItem("tempUnit", "°F");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }
}

async function switchSpeed() {
    const content = document.querySelector(".content");
    const KM = document.querySelector(".kilometers");
    const MI = document.querySelector(".miles");

    KM.onclick = async function() {
        localStorage.setItem("speedUnit", "km");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }

    MI.onclick = async function() {
        localStorage.setItem("speedUnit", "mi");

        content.innerHTML = '';
        chosenUnit();
        await makeCurrInfo(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("speedUnit"));
        await makeForecast(localStorage.getItem("city"), localStorage.getItem("tempUnit"), localStorage.getItem("forecast"));
    }
}

function fetchRequest(city) {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" + city + "&days=7&aqi=no&alerts=no", {mode: 'cors'})
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(function(error) {
            const searchCont = document.querySelector(".searchContainer");
            searchCont.classList.add("invalidSearch");

            const searchBox = document.querySelector(".searchBox");
            searchBox.placeholder = "Please enter a valid name";

            return defaultFetch();
        });
}

function defaultFetch() {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" + localStorage.getItem("prevCity") + "&days=7&aqi=no&alerts=no", {mode: 'cors'})
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            localStorage.setItem("city", localStorage.getItem("prevCity"));
            return response.json();
        });
}

function fetchLeftInfo(city, tempUnit) {
    return fetchRequest(city).then(function(response) {
        const localTimeEpoch = response.location.localtime_epoch * 1000;
        const localTimeDate = new Date(localTimeEpoch);
        
        const formattedDate = localTimeDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });

        let tempVal = response.current.temp_c;
        let feelsVal = response.current.feelslike_c;
        
        if (tempUnit === "°F") {
            tempVal = response.current.temp_f;
            feelsVal = response.current.feelslike_f;
        };  

        return [    
            { class: "cityDate", text: formattedDate },
            { class: "cityName", text: response.location.name + ", " + response.location.country },
            { class: "leftDivider", text: ""},
            { class: "cityTemp", text: tempVal + tempUnit + " | Feels Like " + feelsVal + tempUnit },
            { class: "cityWeather", text: response.current.condition.text },
            { class: "weatherIcon", icon: response.current.condition.icon }
        ];
    });
}

function fetchRightInfo(city, speed) {
    return fetchRequest(city).then(function(response) {
        let speedVal = response.current.wind_kph;
        
        if (speed === "mi") {
            speedVal = response.current.wind_mph;
        };

        return [
            { class: "rightInfoTitle", text: "Humidity" },
            { class: "rightInfoNo", text: response.current.humidity + " %" },
            { class: "rightDivider", text: ""},
            { class: "rightInfoTitle", text: "Chance of Rain" },
            { class: "rightInfoNo", text: response.forecast.forecastday[0].day.daily_will_it_rain + " %" },
            { class: "rightDivider", text: ""},
            { class: "rightInfoTitle", text: "Chance of Snow" },
            { class: "rightInfoNo", text: response.forecast.forecastday[0].day.daily_will_it_snow + " %" },
            { class: "rightDivider", text: ""},
            { class: "rightInfoTitle", text: "Wind Speed" },
            { class: "rightInfoNo", text: speedVal + " " + speed + "/h" }
        ];
    });
}

function makeCurrInfo(city, tempUnit, speed) {
    const content = document.querySelector(".content");

    const currInfo = document.createElement("section");
    currInfo.classList.add("currInfo");

    currInfo.innerHTML = ``;

    const currInfoLeft = document.createElement("section");
    currInfoLeft.classList.add("currInfoLeft");

    return Promise.all([fetchLeftInfo(city, tempUnit), fetchRightInfo(city, speed)])
        .then(function (results) {
            const leftInfoResult = results[0];
            const rightInfoResult = results[1];

            leftInfoResult.forEach((item) => {
                if (item.icon) {
                    const iconContainer = document.createElement("img");
                    iconContainer.classList.add(item.class);
                    iconContainer.src = item.icon;

                    currInfoLeft.append(iconContainer);
                } else {
                    const textContainer = document.createElement("div");
                    textContainer.classList.add(item.class);
                    textContainer.textContent = item.text;

                    currInfoLeft.append(textContainer);
                }
            });

            const currInfoRight = document.createElement("section");
            currInfoRight.classList.add("currInfoRight");

            rightInfoResult.forEach((item) => {
                const textContainer = document.createElement("div");
                textContainer.classList.add(item.class);
                textContainer.textContent = item.text;

                currInfoRight.append(textContainer);
            });

            currInfo.append(currInfoLeft, currInfoRight);
            content.append(currInfo);
        });
}

function fetchForecastDaily(num, city, tempUnit) {
    return fetchRequest(city).then(function(response) {
        let forecastData = response.forecast.forecastday[num];

        const localTimeDate = new Date(forecastData.date);

        const formattedDate = localTimeDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
        });

        let tempValMax = forecastData.day.maxtemp_c;
        let tempValMin = forecastData.day.mintemp_c
        
        if (tempUnit === "°F") {
            tempValMax = forecastData.day.maxtemp_f;
            tempValMin = forecastData.day.mintemp_f;
        };

        return [
            { class: "forecastDate", text: formattedDate },
            { class: "weatherIconForecast", icon: forecastData.day.condition.icon },
            { class: "forecastMaxTemp", text: tempValMax + tempUnit },
            { class: "forecastMinTemp", text: tempValMin + tempUnit }
        ];
    });
}

function fetchForecastHourly(num, city, tempUnit) {
    return fetchRequest(city).then(function(response) {
        let forecastData = response.forecast.forecastday[0].hour[num];

        const localTimeEpoch = forecastData.time_epoch * 1000;

        const localTimeDate = new Date(localTimeEpoch);

        const formattedDate = localTimeDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });

        const formattedTime = localTimeDate.toLocaleTimeString('en-US', {
            hour: 'numeric'
        });

        let tempVal = forecastData.temp_c;
        
        if (tempUnit === "°F") {
            tempVal = forecastData.temp_f;
        };

        return [
            { class: "forecastDate", text: formattedDate },
            { class: "forecastTime", text: formattedTime },
            { class: "weatherIconForecast", icon: forecastData.condition.icon },
            { class: "forecastTemp", text: tempVal + tempUnit }
        ];
    });
}

function makeForecast(city, tempUnit, type) {
    const content = document.querySelector(".content");

    let forecastSection = document.querySelector(".forecastSection");
    if (!forecastSection) {
        forecastSection = document.createElement("section");
        forecastSection.classList.add("forecastSection");
        content.append(forecastSection);
    }

    forecastSection.innerHTML = ``;

    const fetchPromises = [];
    if (type === "daily") {
        for (let i = 1; i < 7; i++) {
            fetchPromises.push(fetchForecastDaily(i, city, tempUnit));
        }
    } else {
        for (let i = 1; i < 24; i++) {
            fetchPromises.push(fetchForecastHourly(i, city, tempUnit));
        }
    }

    return Promise.all(fetchPromises)
        .then((results) => {
            results.forEach((forecastData) => {
                const forecastCard = document.createElement("div");
                forecastCard.classList.add("forecastCard");

                forecastData.forEach((item) => {
                    if (item.class === "weatherIconForecast") {
                        const weatherIconForecast = document.createElement("img");
                        weatherIconForecast.classList.add(item.class)
                        weatherIconForecast.src = item.icon;

                        forecastCard.append(weatherIconForecast);
                    } else {
                        const forecastItem = document.createElement("div");
                        forecastItem.classList.add(item.class);
                        forecastItem.textContent = item.text;

                        forecastCard.append(forecastItem);
                    }
                });

                forecastSection.append(forecastCard);
            });

            content.append(forecastSection);
        });
}