
import mongoose from "mongoose"

    const { Schema, model } = mongoose; 
// Utiliser Schema et model du module mongoose
const userschema =new Schema({
    username:
    {
        type:String,
        required:true
    },
    password :
    {
        type:String,
        required:true
    },
    wallet:
        {
            type:String,
            required:true
        }
        },
        {
    timestamps: true // Ajouter automatiquement createdAt et updatedAt
}
);
export default model ("user",userschema)


