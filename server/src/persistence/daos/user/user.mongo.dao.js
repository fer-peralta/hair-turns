import { MongoContainer } from "../../manager/mongo.manager.js"

export class UserMongoDao extends MongoContainer {
    constructor(model) {
        super(model)
    }
}