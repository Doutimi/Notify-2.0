import fs from "fs"
import { AppointmentsData, BillsData } from "../types";

/**
 * 
 * @param defaultValue a JSON serialiable object value
 */
export function ReadFile<T extends any>(filepath,defaultValue:T){
    //create the file if it doesnt exist and initialise with an empty array
    if(!fs.existsSync(filepath)) fs.writeFileSync(filepath,JSON.stringify(defaultValue));

    let historyData =JSON.parse(fs.readFileSync(filepath).toString());

    //if file is not an array, discard old content,
    if(!Array.isArray(historyData)) historyData=defaultValue;

    return historyData as T
}