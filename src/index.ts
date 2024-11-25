import { config } from "dotenv"
import express, { Application } from "express"
import { routes } from "./routes/route"
import { dataSource } from "./app"
const cors = require('cors');
config();

const app: Application = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

export const connectToDatabase = async () => {
  try {
    await dataSource.initialize()
    console.log("Connected to the DB")
  } catch (error) {
    console.error("DB connection failed", error)
    process.exit(1)
  }
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

connectToDatabase()

app.use("/", routes)