import { runSheets } from "./middleware/sheets";
import { sheets_v4 } from "googleapis"
import type { NextApiResponse } from 'next'

export default async (req: {body: any}, res: NextApiResponse) => {
    try {
        const data = req.body;
        const doGoogleSheets = async (gsapi: sheets_v4.Sheets) => {
            const shortName = "feedback";
            

            const opt1 = {
                spreadsheetId: "18oikXZBJvIUTjYF_PwYRjur5SrjnFkU7ImyIjMb7j5o",
                range: `${shortName}!A:D`,
                resource: {
                    values: [
                        data
                    ]
                },
                valueInputOption: "USER_ENTERED",
            }
            await gsapi.spreadsheets.values.append(opt1)
        }
        runSheets(doGoogleSheets);
        res.status(200).json({status: true})
    } catch (error:any) {
        console.log(error.message)
        res.status(400).json({status: false, data: error.message})
    }
}