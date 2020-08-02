class forecast{
    constructor(){
        this.key = "mZzGEqM96rDEpOywadozmy8FzKOu9ojC";
        this.cityBase = "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherBase = "http://dataservice.accuweather.com/currentconditions/v1/";
    }
    async updateCity(input){
        let cityDetails = await this.getCity(input);
        let weatherDetails = await this.getWeather(cityDetails.Key);
        //object shorthand used below
        return {cityDetails,weatherDetails}
    }
    async getCity(city){
        let offset = `?apikey=${this.key}&q=${city}`;
        let response = await fetch(this.cityBase + offset);
        let data = await response.json();
        return data[0];
    }
    async getWeather(id){
        let offset = `${id}?apikey=${this.key}&`;
        let response = await fetch(this.weatherBase + offset);
        let data = await response.json();
        return data[0];    
    }
}
//without using OOP
// let key = "mZzGEqM96rDEpOywadozmy8FzKOu9ojC";
// //city
// let getCity = async (city)=>{
//     let base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//     let offset = `?apikey=${key}&q=${city}`;
    
//     let response = await fetch(base + offset);
//     let data = await response.json();

//     return data[0];
// }
// //weather
// let getWeather = async (id) => {
//     let base = "http://dataservice.accuweather.com/currentconditions/v1/";
//     let offset = `${id}?apikey=${key}&`;
//     let response = await fetch(base + offset);
//     let data = await response.json();
//     return data[0];
// // getCity("Karachi").then(data => {
// //     return getWeather(data.Key);
// // })
// // .then(data => console.log(data))
// // .catch(err => console.log(err));