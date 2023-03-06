import mongoose from 'mongoose'

const userCollection = 'users'

mongoose.set('strictQuery', true)

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 2 },
    mail: {type: String, required:true},
    password:{type: String , select: false},
    avatar:{ type: String, required:false },
    gender: { type: String, required: true, enum: ["Masculino", "Femenino", "Otro", "Prefiero no decirlo"] },
    dni: { type: Number, required: true, max: 99999999 },
    age: { type: Number, required: true, min: 0, max: 120 },
}, { timestamps: true })


export const userModel = mongoose.model(userCollection, userSchema)