import cors from "cors";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// db and authenticateUser
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRouter.js";
import postRouter from "./routes/postRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandleMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Welcome!" });
});
app.get("/test", (req, res) => {
  res.send({ msg: "Welcome!" });
});

app.use("/api/auth", authRouter);
app.use("/api/auth", jobRouter);
app.use("/api/post", authenticateUser, postRouter);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
