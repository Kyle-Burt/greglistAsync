import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";



class HousesServices {


    async getHouses() {
        const res = await api.get('api/houses')
        console.log('got homes', res.data);

        const builtHouses = res.data.map(housePojo => new House(housePojo))

        AppState.houses = builtHouses
    }


}









export const housesServices = new HousesServices()