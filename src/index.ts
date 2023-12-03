import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

const app = express();
const port = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
