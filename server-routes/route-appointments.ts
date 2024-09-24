import {Express} from "express"
import { AppointmentsData } from "../types";
import { ReadFile } from "./functions";
import fs from "fs"

const appointmentsFilePath ='./data/appointments.json';

export default function RouteAppointments(app:Express){
    //endpoint to get appointments list
    app.get("/appointments/list",(req,res)=>{
        let appointmentsData:AppointmentsData[]=ReadFile(appointmentsFilePath,[]);
        console.log({appointmentsData})
        res.send(appointmentsData)
    })

    // Endpoint to handle appointment form submission
    app.post('/appointments/new', (req, res) => {
        const appointmentsEntry:AppointmentsData = req.body
        console.log({appointmentBody:req.body})

        let historyData=ReadFile<AppointmentsData[]>(appointmentsFilePath,[])
        //append the new data receive int he http body
        historyData.push(appointmentsEntry)

        fs.writeFileSync(appointmentsFilePath,JSON.stringify(historyData))
        res.send({message:"Appointment saved successfully"});
    });

    app.get("/appointments/edit/:id/data",(req,res)=>{
        let id=req.params.id
        console.log(`data  for appointmentID:${id} received`);

        let data:AppointmentsData[]=ReadFile(appointmentsFilePath,[])

        let entryData=data.find(item=>item.id===id)
        res.send(entryData||{})
    })

    //endpoint to delete a single appointment entry
    app.delete("/appointments/edit/:id",(req,res)=>{
        console.log({message:"delete request"})
        let id=req.params.id;
        let allAppointments:AppointmentsData[]=ReadFile(appointmentsFilePath,[]);
        //remove the item with the indicated id
        let filteredData=allAppointments.filter(item=>item.id!==id);
        //save the edited bills entries
        fs.writeFileSync(appointmentsFilePath,JSON.stringify(filteredData))
        res.send({message:"bill entry deleted successfully"});
    })

    //endpoint to save an edited appointment entry
    app.patch("/appointments/edit/:id",(req,res)=>{
        let id=req.params.id
        console.log({message:`Save request for appointmentID:${id} received`});
        console.log("body ", req.body)
        
        let editedData:AppointmentsData={...req.body,id};

        let allAppointmentsData=ReadFile<AppointmentsData[]>(appointmentsFilePath,[]);
        // console.log({allAppointmentsData})

        let entryToEdit=allAppointmentsData.find(item=>item.id===id);
        if(!entryToEdit){
            console.log("entry not found")
            res.send();
            return;
        }

        // console.log({editedData,entryToEdit})
        //copy the values in the edited entry into the original entry
        Object.keys(editedData).forEach(key=>{
            entryToEdit[key]=editedData[key]
        })

        fs.writeFileSync(appointmentsFilePath,JSON.stringify(allAppointmentsData))
        res.send({message:"bill entry edited successfully"});
    })

}