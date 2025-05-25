import express from "express"
import { connect } from "mongoose";
import "dotenv/config"
import { Enviroments } from "./plugins/enviroment.service";
import { initWarriorRoutes } from "./routes/warriors.routes";



const app = express();
app.use(express.json());

//iniciamos las rutas
const initService = async () => {

    app.use("/api", await initWarriorRoutes());
}

initService();

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

