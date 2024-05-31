import { app } from "./src/app.js";
import dotenv from 'dotenv';
dotenv.config()


const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if(err){
        console.log("Server error");
        console.log(err);
    };
    console.log(`Server is working on port : ${PORT}`);
});
