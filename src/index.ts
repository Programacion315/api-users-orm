import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Data base is connected");
    app.listen(3000);
    console.log("Server is listening in port 3000");
  } catch (error) {
    console.error(error)
  }
}

main();
