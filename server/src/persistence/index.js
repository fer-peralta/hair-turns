import { TurnsModel } from "./models/turn.model.js";
import { MongoClient } from "./clients/mongo.client.js";

export const getApiDao = async (dbtype) => {
    let TurnsDaoContainer
    switch (dbtype) {
        case "MONGO":
            const client = new MongoClient()
            await client.connect()
            const { TurnMongoDao } = await import("./daos/turns/turn.mongo.dao.js")
            TurnsDaoContainer = new TurnMongoDao(TurnsModel)
            break
        case "FIREBASE":
    }
    return { TurnsDaoContainer }
}