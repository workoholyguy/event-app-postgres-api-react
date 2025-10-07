import express from "express";
import router from "./routes/events.js";
import "./config/dotenv.js";
import cors from "cors";

const app = express();
app.use(cors());

// app.use("/public", express.static("./public"));
// app.use("/scripts", express.static("./public/scripts"));

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1> <h2 style="text-align: center; margin-top: 50px;">This is just an API page, nothing really happens on this page, but the machine that serves this page, also serves the other pages, as well as serving routes along with the data attached to them, as well as handling the database request, and is also able to perform page actions before the result is served to a customer</h2> '
    );
});

app.use("/events", router);

//
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
