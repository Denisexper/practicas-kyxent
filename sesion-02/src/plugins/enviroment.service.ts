import "dotenv/config"
import env from "env-var"

export const Enviroments = {
    MONGO : env.get("MONGODB_URI").required().asUrlString()
}