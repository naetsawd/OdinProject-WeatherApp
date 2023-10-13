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
    { class: "celsius", text: "&#176;C" },
    { class: "fahrenheit", text: "&#176;F" }
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
        li.innerHTML = item.text;

        ul.append(li);

        if (index < items.length - 1) {
            const divider = document.createElement("li");
            divider.classList.add("divider");
            ul.append(divider);
        }
    });

    document.querySelector("nav").append(ul);
}

const currInfoLeftObj = [
    { class: "cityName", text: "Toronto, Canada" },
    { class: "cityDate", text: "Thursday, 12th Oct 23'" },
    { class: "cityTime", text: "11:05 pm" },
    { class: "cityTemp", text: "7 C | Feels Like 6 C" },
    { class: "cityWeather", text: "Cloudy" },
];

const currInfoRightObj = [
    { class: "rightInfoTitle", text: "Humidity" },
    { class: "rightInfoNo", text: "78 % | High" },
    { class: "rightInfoTitle", text: "Chance of Rain" },
    { class: "rightInfoNo", text: "0 % | None" },
    { class: "rightInfoTitle", text: "Wind Speed" },
    { class: "rightInfoNo", text: "16.7 km/h | Strong" }
];

function makeInfoPanel() {
    const content = document.querySelector(".content");

    const currInfo = document.createElement("section");
    currInfo.classList.add("currInfo");

    const currInfoLeft = document.createElement("section");
    currInfoLeft.classList.add("currInfoLeft");

    currInfoLeftObj.forEach((item) => {
        const textContainer = document.createElement("div");
        textContainer.classList.add(item.class);
        
        if (item.class === "cityName") {
            textContainer.textContent = item.text + " Fav";
        } else {
            textContainer.textContent = item.text;
        }

        currInfoLeft.append(textContainer);
    })
    
    const currInfoRight = document.createElement("section");
    currInfoRight.classList.add("currInfoRight");

    currInfoRightObj.forEach((item) => {
        const textContainer = document.createElement("div");
        textContainer.classList.add(item.class);
        
        if (item.class === "cityName") {
            textContainer.textContent = item.text + " Fav";
        } else {
            textContainer.textContent = item.text;
        }

        currInfoRight.append(textContainer);
    })

    const forecastInfo = document.createElement("section");
    forecastInfo.classList.add("forecastInfo");

    currInfo.append(currInfoLeft, currInfoRight);
    content.append(currInfo, forecastInfo);
}