import { google } from "googleapis"
import key from "../../../client_secret.json"
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

const client = new google.auth.JWT (
    key.client_email,
    undefined,
    key.private_key,
    SCOPES
);

export const runSheets = async(func: Function, ...args: any[]) =>
    client.authorize((err, tokens) => {
        if(err) {
            console.log(err);
        } else {
            const gsapi = google.sheets({version: "v4", auth: client});
            return func(gsapi, ...args)
        }
    })