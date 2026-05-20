import express from 'express'
import cors from "cors";
import config from './src/config/config.js'
import { connectDb } from './src/config/database.js'
import authRoute from './src/routes/user.routes.js';


const port = config.PORT
const app = express();

connectDb()

app.use(cors({
  origin: "http://localhost:5173", // React URL
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/new", authRoute);

app.listen(port, () => {

    console.log(`Server is running ${port}`);
})

