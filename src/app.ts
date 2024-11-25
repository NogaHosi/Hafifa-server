import { config } from "dotenv"
import { DataSource } from "typeorm"
import DigitsData from "./entities/DigitsData"
import defaultPort from "./utils/consts"

config()

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || defaultPort),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [DigitsData],
  synchronize: false,
  logging: true,
  schema: process.env.DB_SCHEMA,
  migrations: ['src/migrations/*.ts'],
})
