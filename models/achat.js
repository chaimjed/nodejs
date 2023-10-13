
    import mongoose from "mongoose"

const { Schema, model } = mongoose; 
// Utiliser Schema et model du module mongoose
const achatschema =new Schema({
    boughtDate:
    {
        type: Date,
        required:true
    }
   
   
        },
        {
    timestamps: true // Ajouter automatiquement createdAt et updatedAt
}
);
export default model ("achat",achatschema)