import express from "express";
import dotenv from "dotenv";
import DBconnect from "./dbconnect.js";
import cors from "cors";
// Importing Router//
import watchRoute from "./routes/watchRoute.js";
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
DBconnect();

app.use("/watches", watchRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
