import mongoose, { ConnectOptions } from "mongoose";
import { config } from "./vars";

const connectDB = async () => {
  try {
    const dbUrl = `mongodb://${config.db.host}/${config.db.database}`;
    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", true);
    }
    mongoose.Promise = Promise;
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.info("Db connected successfuly: " + dbUrl);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
