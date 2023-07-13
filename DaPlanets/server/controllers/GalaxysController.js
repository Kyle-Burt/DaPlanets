import { MongoTopologyClosedError } from "mongodb";
import { galaxysServices } from "../services/GalaxysServices.js";
import BaseController from "../utils/BaseController.js";

export class GalaxysController extends BaseController {
    constructor() {
        super('api/galaxys')
        this.router

            .get('', this.getGalaxys)
            .post('', this.createGalaxy)
    }

    async getGalaxys(req, res, next) {
        try {
            const galaxy = await galaxysServices.getGalaxys()

            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            const galaxydata = req.body
            const galaxy = await galaxysServices.createGalaxy(galaxydata)

            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}