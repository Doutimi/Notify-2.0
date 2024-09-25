import {Express} from "express"
import { BillsData } from "../types";
import { ReadFile } from "./functions";
import fs from "fs"
import colors from "colors"
colors.enable()

const billsFilePath ='./data/bills.json';

export default function RouteBills(app:Express){
    //endpoint to get bills list
    app.get("/bills/list",(req,res)=>{
        console.log("bills list requested".green)
        let billsData:BillsData[]=ReadFile(billsFilePath,[]);
        // console.log({billsData})
        res.send(billsData)
    })

    // Endpoint to handle appointment form submission
    app.post('/bills/new', (req, res) => {
        const billsEntry:BillsData = req.body
        console.log({appointmentBody:req.body})

        let historyData=ReadFile<BillsData[]>(billsFilePath,[])
        //append the new data receive in the http body
        historyData.push(billsEntry)

        fs.writeFileSync(billsFilePath,JSON.stringify(historyData))
        res.send({message:"Bill saved successfully"});
    });

    app.get("/bills/edit/:id/data",(req,res)=>{
        let id=req.params.id
        console.log(`data  for billsID:${id} received`);

        let data:BillsData[]=ReadFile(billsFilePath,[])

        let entryData=data.find(item=>item.id===id)
        res.send(entryData||{})
    })

    //endpoint to delete a single appointment entry
    app.delete("/bills/edit/:id",(req,res)=>{
        console.log({message:"delete request"})
        let id=req.params.id;
        let allbills:BillsData[]=ReadFile(billsFilePath,[]);
        //remove the item with the indicated id
        let filteredData=allbills.filter(item=>item.id!==id);
        //save the edited bills entries
        fs.writeFileSync(billsFilePath,JSON.stringify(filteredData))
        res.send({message:"bill entry deleted successfully"});
    })

    //endpoint to save an edited appointment entry
    app.patch("/bills/edit/:id",(req,res)=>{
        let id=req.params.id
        console.log({message:`Save request for billsID:${id} received`});
        console.log("body " .yellow, req.body)
        
        let editedData:BillsData={...req.body,id};
        console.log(editedData);

        let allbillsData=ReadFile<BillsData[]>(billsFilePath,[]);
        // console.log({allbillsData})

        let entryToEdit=allbillsData.find(item=>item.id===id);
        if(!entryToEdit){
            console.log("entry not found".red)
            res.send();
            return;
        }

        // console.log({editedData,entryToEdit})
        //copy the values in the edited entry into the original entry
        Object.keys(editedData).forEach(key=>{
            entryToEdit[key]=editedData[key]
        })

        fs.writeFileSync(billsFilePath,JSON.stringify(allbillsData))
        res.send({message:"bill entry edited successfully"});
    })

}