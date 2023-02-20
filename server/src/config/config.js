import * as dotenv from "dotenv";

dotenv.config()

// aca va la config

//creamos la configuracion de nuestra aplicacion
export const config = {
    // SQLITE_DB: process.env.SQLITE_DB,
    // MARIADB_HOST: process.env.MARIADB_HOST,
    MONGO_DB: process.env.MONGO_DB,
    // MONGO_SESSION: process.env.MONGO_SESSION,
    PORT: process.env.PORT || 8080
    // DBTYPE: process.env.DBTYPE || "MONGO"
};