import { dbContext } from "../db/DbContext.js"

class GalaxysServices {

    async getGalaxys() {
        const galaxy = await dbContext.Galaxies.find()

        return galaxy
    }

    async createGalaxy(galaxydata) {
        const galaxy = await dbContext.Galaxies.create(galaxydata)

        return galaxy
    }
}

export const galaxysServices = new GalaxysServices()