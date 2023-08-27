import { Schema,model } from "mongoose";
const packagesSchema = new Schema({

    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },

    price:{
        type: String,
        required:true
    },
},{
timestamps: true,
versionKey: false

})

export default model('Packages',packagesSchema);





