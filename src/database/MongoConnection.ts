import mongoose from "mongoose";
import { config } from "../config/Constant";

 export class MongoConnection {

    public async Connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION);

        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    }
  }