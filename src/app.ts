import { config } from "dotenv"
import { DataSource } from "typeorm"
import DigitsData from "./entities/DigitsData"

config()

export const MyDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [DigitsData],
  synchronize: true,
  logging: false,
  schema: process.env.DB_SCHEMA 
})
