import { TurnsModel } from "./models/turn.model.js";
import { userModel } from "./models/user.model.js";
import { MongoClient } from "./clients/mongo.client.js";

export const getApiDao = async (dbtype) => {
    let TurnDaoContainer
    let UserDaoContainer
    switch (dbtype) {
        case "MONGO":
            const client = new MongoClient()
            await client.connect()
            const { UserMongoDao } = await import("./daos/user/user.mongo.dao.js")
            const { TurnMongoDao } = await import("./daos/turns/turn.mongo.dao.js")
            TurnDaoContainer = new TurnMongoDao(TurnsModel)
            UserDaoContainer = new UserMongoDao(userModel)
            break
        case "FIREBASE":
    }
    return { TurnDaoContainer, UserDaoContainer }
}