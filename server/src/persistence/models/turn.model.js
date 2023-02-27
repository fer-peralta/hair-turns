import mongoose from 'mongoose'

const turnsCollection = 'turns'

mongoose.set('strictQuery', true)

const turnsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dni: { type: Number, required: true, max: [8, "Ingrese como máximo 8 números"] },
    day: { type: Date, required: true }
})

export const TurnsModel = mongoose.model(turnsCollection, turnsSchema)