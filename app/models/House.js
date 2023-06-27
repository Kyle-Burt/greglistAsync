

export class House {
    constructor(data) {
        this.id = data.id
        this.creatorId = data.creatorId
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }

    get CardTemplate() {
        return `
    <div class="col-10 m-auto mb-3">
        <section class="row bg-light elevation-5 car-border">
            <div class="col-12 col-md-4 p-0">
                <img class="img-fluid"
                src="${this.imgUrl}"
                alt="Sellers Home">
            </div>
            <div class="col-12 col-md-8 p-3">
                <h2>${this.year}</h2>
                <h3>$${this.price}</h3>
                <h3>${this.bedrooms}</h3>
                <h3>${this.bathrooms}</h3>
                <p>${this.description}</p>
                <h4>${this.createdAt.toLocaleString()}</h4>
                <div class="d-flex align-items-center mb-3">
                    <h5 class="me-3">${this.creator.name}</h5>
                    <img class="img-fluid creator-picture"
                    src="${this.creator.picture}"
                    alt="${this.creator.name}">
                </div>
            </div>
        </section>
    </div>
        `
    }

    static get CreateForm() {
        return `
            <form onsubmit="">
                <div>
                    <label for="houseYear">Year built</label>
                    <input type="number" id="houseYear" minlength="3" maxlength="30" required name="year">
                </div>
                <div>
                    <label for="housePrice">price</label>
                    <input type="number" id="housePrice" minlength="1" maxlength="1000000000" required name="price">
                </div>
                <div>
                    <label for="houseBedrooms">number of bedrooms</label>
                    <input type="number" id="houseBedrooms" minlength="3" maxlength="30" required name="bedrooms">
                </div>
                <div>
                    <label for="houseBathrooms">number of bathrooms</label>
                    <input type="number" id="houseBathrooms" minlength="3" maxlength="10" required name="bathrooms">
                </div>
                <div>
                    <label for="houseLevels">stories</label>
                    <input type="number" id="houseLevels" minlength="3" maxlength="5" required name="levels">
                </div>
                <div>
                    <label for="houseImg">Image</label>
                    <input type="url" id="houseImg" minlength="3" maxlength="300" required name="imgUrl">
                </div>
                <div>
                    <label for="houseDescription">Description</label>
                    <textarea id="houseDescription" name="description" rows="10" class="w-50"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            `
    }
}



