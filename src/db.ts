import { DataSource } from "typeorm";
import {User} from './entities/User'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "learn",
    entities: [User],
    logging: true,
    synchronize: true
})