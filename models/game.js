
import mongoose from "mongoose"

const { Schema, model } = mongoose; 
// Utiliser Schema et model du module mongoose
const  Gameschema =new Schema({
    name:
    {
        type:String,
        required:true
    },
    year:
    {type:Number,
        required:true
    },
    onSale:
        {
            type:Boolean,
            required:true
        }
        },
        {
    timestamps: true // Ajouter automatiquement createdAt et updatedAt
}
);
export default model ("Game",Gameschema)

