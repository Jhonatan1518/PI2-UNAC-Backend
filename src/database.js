import mongoose from 'mongoose'

(async()=>{
    try{
        const db= await mongoose.connect('mongodb+srv://jhonatanzapatah:0rlnQwEVbp8M1EYP@cluster0.eg38mhn.mongodb.net/');
        console.log('DB connected to', db.connection.name);
    }catch (error){
        console.error(error);
    }
})();