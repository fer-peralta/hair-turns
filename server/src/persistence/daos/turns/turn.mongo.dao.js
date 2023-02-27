import { MongoContainer } from "../../manager/mongo.manager.js"

export class TurnMongoDao extends MongoContainer {
    constructor(model) {
        super(model)
    }
}