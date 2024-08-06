import { google } from "googleapis"
// import key from "../../../client_secret.json"
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

const client = new google.auth.JWT (
    "utmnsheets@feedback-utmn-landing-node.iam.gserviceaccount.com",
    undefined,
    "-----BEGIN PRIVATE KEY-----\nsecret_key\n-----END PRIVATE KEY-----\n",
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