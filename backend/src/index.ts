import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import contactRoutes from "./routes/contactRoutes";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use(express.json());
app.use(cors());

app.use("/api/contact", contactRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/", (req, res) => {
  res.send("uxstudio challenge API running 🥳");
});
app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`),
);
