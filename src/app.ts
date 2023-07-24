import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();

const port = 3000;

app.use(express.json())
app.get("/", (req, res) => {
  res.send("Api funcionando");
});
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
