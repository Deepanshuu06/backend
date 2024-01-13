// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})

connectDB()



/*
(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/
        ${DB_NAME}`)
    
        app.on("Error" , (error)=>{
            console.log("ERR:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on the ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.error("ERROR:", error)
        throw
    }
})();

*/