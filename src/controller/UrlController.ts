import { URLModel } from "../database/model/URL";
import { Request, Response } from "express";
import shortId from "shortid"
import { config } from "../config/Constant";

export class UrlController {

    public async Shorten(req:Request,res:Response) : Promise<void> {

        const {originURL} = req.body;
        const url = await URLModel.findOne({originURL});
        if(url) {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(url.shortURL);
            return;
        }
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;
        const newURL = await URLModel.create({originURL,hash,shortURL})
        res.header("Access-Control-Allow-Origin", "*");
        res.status(201).json(newURL.shortURL);
    }

    public async Redirect(req:Request,res:Response) : Promise<void> {
        
        const {hash} = req.params;
        const url = await URLModel.findOne({hash});

        if(url){
            res.status(301).redirect(url.originURL);
            return;
        }

        res.status(400).json({error : "URL not found"});
    }
}