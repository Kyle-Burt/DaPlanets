import { planetsServices } from "../services/PlanetsServices.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router

            .get('', this.getPlanets)
            .post('', this.createPlanet)
    }
    async getPlanets(req, res, next) {
        try {
            const planets = await planetsServices.getPlanets()

            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async createPlanet(req, res, next) {
        try {
            const planetData = req.body
            const planet = await planetsServices.createPlanet(planetData)

            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}