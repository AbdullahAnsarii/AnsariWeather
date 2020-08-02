let formObject = document.querySelector("form");
let card = document.querySelector(".card");
let details = document.querySelector(".details");
let time = document.querySelector("img.time");
let icon = document.querySelector("img.iconimg");
let Forecast = new forecast();

let updateUI = data => {
    //enabling display
    if (card.classList.contains("d-none")){
        card.classList.remove("d-none");
    }
    // let cityDetails = data.cityDetails;
    // let weatherDetails = data.weatherDetails;
    //destructure data
    let {cityDetails,weatherDetails} = data;
    details.innerHTML=
    `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weatherDetails.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>
    `
    //adding picture
    // let timeSrc = null;
    // if(weatherDetails.IsDayTime){
    //     timeSrc = "img/day.png";
    // }
    // else{
    //     timeSrc = "img/night.png";
    // }
    //using ternary operator
    let timeSrc = weatherDetails.IsDayTime ? "img/day.png" : "img/night.png";
    time.setAttribute("src", timeSrc);
    //adding icons
    let iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc)

}


formObject.addEventListener('submit', e =>{
    //preventing refresh
    e.preventDefault();
    //getting value from input field
    let input = formObject.city.value.trim();
    //resetting form
    formObject.reset();
    //update ui
    Forecast.updateCity(input)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})