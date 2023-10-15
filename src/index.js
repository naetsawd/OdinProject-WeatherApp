import "./styles.css";

document.addEventListener("DOMContentLoaded", function() {
    createNavItem("navItems", navItems);
    createNavItem("tempUnit", tempUnitItems);
    createNavItem("speedUnit", speedUnitItems);
    makeInfoPanel();
});

const navItems = [
    { class: "navSearch", text: "Search" },
    { class: "navSaved", text: "Saved" }
];

const tempUnitItems = [
    { class: "celsius", text: "°C" },
    { class: "fahrenheit", text: "°F" }
];

const speedUnitItems = [
    { class: "kilometers", text: "km" },
    { class: "miles", text: "mi" }
];

function createNavItem(container, items) {
    const ul = document.createElement("ul");
    ul.classList.add(container);

    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.classList.add("navItem");
        li.classList.add(item.class);
        li.innerText = item.text;

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
            return [
                { class: "cityName", text: response.location.name + ", " + response.location.country },
                { class: "cityDate", text: "Thursday, 12th Oct 23'" },
                { class: "cityTime", text: "11:05 pm" },
                { class: "cityTemp", text: response.current.temp_c + "°C | " + response.current.feelslike_c + "°C" },
                { class: "cityWeather", text: response.current.condition.text }
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
                { class: "rightInfoNo", text: response.current.humidity + " % | " + "None" },
                { class: "rightInfoTitle", text: "Wind Speed" },
                { class: "rightInfoNo", text: response.current.wind_kph + " km/h | " + "Strong" }
            ];
        });
}

function makeInfoPanel() {
    const content = document.querySelector(".content");

    const currInfo = document.createElement("section");
    currInfo.classList.add("currInfo");

    const currInfoLeft = document.createElement("section");
    currInfoLeft.classList.add("currInfoLeft");

    fetchLeftInfo().then(function(result) {
        result.forEach((item) => {
            const textContainer = document.createElement("div");
            textContainer.classList.add(item.class);
    
            if (item.class === "cityName") {
                textContainer.textContent = item.text + " Fav";
            } else {
                textContainer.textContent = item.text;
            }
    
            currInfoLeft.append(textContainer);
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

    const forecastInfo = document.createElement("section");
    forecastInfo.classList.add("forecastInfo");

    currInfo.append(currInfoLeft, currInfoRight);
    content.append(currInfo, forecastInfo);
}