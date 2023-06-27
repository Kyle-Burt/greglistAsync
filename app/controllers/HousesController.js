import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesServices } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
    const houses = AppState.houses
    let template = ''
    houses.forEach(houses => template += houses.CardTemplate)
    setHTML('houseList', template)
}

export class HousesController {
    constructor() {
        console.log('Houses controller working');

        this.getHouses()
        this.drawHouseForm()

        AppState.on('houses', _drawHouses)
        AppState.on('houses', this.drawHouseForm)


    }

    async getHouses() {
        try {
            await housesServices.getHouses()
        } catch (error) {
            console.error(error);
            Pop.error(error.message)
        }
    }

    async createHouse(event) {
        try {
            event.preventDefault()
            const form = event.target
            const houseData = getFormData(form)
        } catch (error) {

        }
    }

    drawHouseForm() {
        setHTML('house-form', House.CreateForm)
    }
}