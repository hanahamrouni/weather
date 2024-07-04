import { search0 } from "./variableModule.js";
import { Weather } from "./weatherModule.js";


export class searched {

    searchh() {

        let val = search0.value;
        let search1 = new Weather();
        search1.getweather(val);
        console.log(val);
    }

    search2() {
        search0.addEventListener('keyup', this.searchh);
    }

    geolocate() {
        navigator.geolocation.getCurrentPosition(function (pos) {
            let latitudee = pos.coords.latitude;
            let longitudee = pos.coords.longitude;
            let val = [latitudee, longitudee];
            let search1 = new Weather();
            search1.getweather(val);
            console.log(latitudee, longitudee);
        }, err => console.log(err))

    }

}







