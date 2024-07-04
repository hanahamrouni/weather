import { cardgroup } from "./variableModule.js"


export class Weather {

    DateArray = [];
    DateArray2 = [];
    DateArray3 = [];
    DateArray4 = [];

    async getweather(val) {

        let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=01a401f05be64545a79191346241504&q=${val}&days=7`);

        let res1 = await res.json();
        this.DateArray = res1.forecast.forecastday;
        this.DateArray3 = res1.location.name;

        this.weatherCard1(this.DateArray, this.DateArray3);
        // console.log(res1);
        // console.log(this.DateArray);

        this.DateArray.splice(0, 1);
        this.DateArray4 = this.DateArray;
        this.weatherCard2(this.DateArray4);
        
    }

    weatherCard1(DateArray, DateArray3) {

        this.DateArray2 = this.DateArray;
        let date = new Date();
        let cards = "";

        for (let i = 0; i < this.DateArray2.length; i++) {

            cards = `<div class="col-md-4">
            <div class="card ps-3 pt-0 p-4 rounded-0">
                <div class="d-flex justify-content-between pt-2" id="today">
                    <div class="day ps-2">${date.toDateString().slice(0, 3)}</div>
                    <div class=" date pe-2">${date.toDateString().slice(4,)}</div>
                </div>
                <div class="">
                    <div class="name pt-4 ps-3 fs-5">${this.DateArray3}</div>
                    <div class=" d-flex justify-content-around">
                        <div class="dagraa pt-2 ps-3 pe-5 mb-4 fw-bold text-light">${this.DateArray2[i].day.avgtemp_c}<sup>o</sup>C</div>

                        <div class="icon pt-5 ">
                            <img src="${this.DateArray2[i].day.condition.icon}" class="phot pe-5 mb-5" alt="" width="90">
                        </div>
                    </div>
                    <div class="custom pb-3 ps-3 text-primary">${this.DateArray2[i].day.condition.text}</div>
                    <span class="humidity ps-3"><img src="imgs/icon-umberella.png" class="p-1"
                    alt="">${this.DateArray2[i].day.daily_chance_of_rain}%</span>
                    <span class="wind ps-3 pb-3"><img src="imgs/icon-wind.png" class="p-1"
                    alt="">${this.DateArray2[i].day.maxwind_kph} km/hr</span>
                    <span class="winddir ps-3"><img src="imgs/icon-compass.png" class="p-1"
                    alt="">${this.DateArray2[i].hour[i].wind_dir}</span>
                </div>
            </div>
        </div>`
        }

        cardgroup.innerHTML = cards
    }

    weatherCard2(DateArray4) {

        // console.log(DateArray4);
        let cards2 = "";

        for (let i = 0; i < this.DateArray4.length; i++) {

            cards2 += `<div class="col-md-4">
            <div class="card pb-5 rounded-0">
                <div class="text-center">
                    <div class="day ps-2 pt-2 pb-3">${this.DateArray4[i].date}</div>
                    <div class="icon pt-5 pb-3">
                        <img src="${this.DateArray4[i].day.condition.icon}" class="phoo" alt="" width="48">
                    </div>
                    <div class="max fs-5 pt-3 fw-bold text-light">${this.DateArray4[i].day.avgtemp_c}<sup>o</sup>C</div>
                    <small class="min pt-3">${this.DateArray4[i].day.maxtemp_c}<sup>o</sup></small>
                    <div class="naxtcustom pt-3 pb-1 text-primary">${this.DateArray4[i].day.condition.text}</div>
                </div>
            </div>
        </div>`
        }
        cardgroup.innerHTML += cards2;
    }

}