import express, { json, Request, Response, urlencoded } from "express";
import cors from "cors";
import { create, getList } from "./routes/messages";

const app = express();
const port = 8000;

app.use(urlencoded({ extended: true })); // x-www-form-urlencoded
app.use(json()); //JSON

app.use(cors());

// app.get("/", (req: any, res: any) => {
//   res.send("Hello World!");
// });

app.post("/messages", create);
app.get("/messages", getList);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
