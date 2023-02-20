import mongoose from 'mongoose'

const turnsCollection = 'turns'

mongoose.set('strictQuery', true)

const turnsSchema = new mongoose.Schema({
    // name: { type: String, required: true },
    // username: { type: String, required: true },
    // password: { type: String, required: true }
})

export const TurnsModel = mongoose.model(turnsCollection, turnsSchema)