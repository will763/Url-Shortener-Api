import express from "express"
import cors from "cors"
import 'dotenv/config'
import {UrlController}  from "./controller/UrlController";
import { MongoConnection } from "./database/MongoConnection";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({origin : "*"}));
app.use(express.json());
const urlController = new UrlController();

const database = new MongoConnection();
database.Connect();

app.get("/",(res,req) => {
    req.json({message : "hello"})
})

app.post('/shorten',cors({origin : "*"}),urlController.Shorten);
app.get('/:hash',urlController.Redirect);

app.listen(port);