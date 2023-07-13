import { dbContext } from "../db/DbContext.js"

class PlanetsServices {
    async getPlanets() {
        const planet = await dbContext.Planets.find()

        return planet
    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)

        return planet
    }
}

export const planetsServices = new PlanetsServices()