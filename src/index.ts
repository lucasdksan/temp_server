import express from "express";
import bodyParser from "body-parser";
import cron from "node-cron";
import cors from "cors";
import routes from "./routes";
import ProspectingController from "./controllers/prospectingController";

const app = express();
const port = process.env.PORT ?? 3030;
const prospectingController = new ProspectingController();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(routes);

cron.schedule('0 0-6 * * *', async () => {
    console.log('Running prospecting process...');
    const fakeReq = {} as express.Request;
    const fakeRes = {} as express.Response;
    await prospectingController.start(fakeReq, fakeRes);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
