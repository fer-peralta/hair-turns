import mongoose from 'mongoose'

const turnsCollection = 'turns'

mongoose.set('strictQuery', true)

//* Limit the day to 15 days to the future
let limitDayGap = new Date();
limitDayGap.setDate(limitDayGap.getDate() + 15);

const turnsSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 2 },
    gender: { type: String, required: true, enum: ["Masculino", "Femenino", "Otro", "Prefiero no decirlo"] },
    dni: { type: Number, required: true, max: 99999999 },
    age: { type: Number, required: true, min: 0, max: 120 },
    day: { type: Date, required: true, min: new Date(), max: limitDayGap }
}, { timestamps: true })

export const TurnsModel = mongoose.model(turnsCollection, turnsSchema)