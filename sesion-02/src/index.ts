import express from "express"
import { connect } from "mongoose";
import "dotenv/config"
import env from "env-var"
import { initWarriorRoutes } from "./routes/warriors.routes";



const Enviroments = {
    MONGO : env.get("MONGODB_URI").required().asUrlString()
}

const app = express();
app.use(express.json());
app.use("/api", initWarriorRoutes());

app.listen(3000, () => {
    console.log("server is running")
})

const mongoService = async () => {
    try {
        
        await connect(Enviroments.MONGO)
        console.log("connected to db");
        
    } catch (error) {
        
        throw new Error(`${error}`)
    }
}

mongoService();

