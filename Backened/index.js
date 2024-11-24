
import express, { urlencoded } from 'express';
import bookRoute from './route/book.route.js';
import userRoute from "./route/user.route.js";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));

const port = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected");
    

}catch(error){
    console.log(error);
    

}

app.use("/user",userRoute);

app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully running on http://localhost:" + port);
    }
});
