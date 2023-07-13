import { ObjectId } from "mongodb";
import { Schema } from "mongoose";



export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxlength: 100, minlength: 1 },
    biome: { type: String, required: true, maxlength: 100, minlenght: 1 },
    atmosphere: { type: Boolean, required: true },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
}, { timestamps: true, toJSON: { virtuals: true } })