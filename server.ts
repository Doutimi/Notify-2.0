import express from "express"
import bodyParser from "body-parser";
import path from "node:path"
import fs from "fs"
import { AppointmentsData, BillsData } from "./types";
import cors from "cors"
import RouteAppointments from "./server-routes/route-appointments";
import { ReadFile } from "./server-routes/functions";
import RouteBills from "./server-routes/route-bills";


const app = express();
const port = 3000;
//*****note all midleware should be clled before the routing functions***
app.use(cors())
// Middleware to parse JSON body
app.use(bodyParser.json());

//*****note: do not call routing fucntions before midleware***
RouteAppointments(app)
RouteBills(app)
// Serve the HTML form
// app.use(express.static(path.join(__dirname, 'frontend')));

// Path to the JSON file
const billsFilePath ='./data/bills.json';
// const appointmentsFilePath ='./data/appointments.json';

//endpoint to get bills list
app.get("/bills/get_list",(req,res)=>{
    let billsData:BillsData[]=ReadFile(billsFilePath,[])
    res.send(billsData)
})

//endpoint to get single bill edit page data
app.get("/bills/edit/:id/data",(req,res)=>{
    let id=req.params.id
    console.log(`data  for billsID:${id} received`);

    let billsData:BillsData[]=ReadFile(billsFilePath,[])

    let entryData=billsData.find(item=>item.id===id)
    res.send(entryData||{})
})

//endpoint to save an edited  bill entry
app.patch("/bills/edit/:id/save",(req,res)=>{
    let id=req.params.id
    console.log({message:`Save request for ${id} received`})
    
    let editedBillData={...req.body,id};

    let allBillsData=ReadFile<BillsData[]>(billsFilePath,[])

    let entryToEdit=allBillsData.find(item=>item.id===id);
    if(!entryToEdit){
        res.send();
        return;
    }

    Object.keys(editedBillData).forEach(key=>{
        entryToEdit[key]=editedBillData[key]
    })

    fs.writeFileSync(billsFilePath,JSON.stringify(allBillsData))
    res.send({message:"bill entry edited successfully"});
})

//endpoint to get single bill edit page
app.get("/bills/edit/:id",(req,res)=>{
    let html=fs.readFileSync("frontend/bills/edit/index.html");
    res.setHeader("Content-Type","text/html")
    res.send(html);
})

//endpoint to delete a single bill entry
app.delete("/bills/edit/:id",(req,res)=>{
    console.log({message:"delete request"})
    let id=req.params.id;
    let allBillsData:BillsData[]=ReadFile(billsFilePath,[]);
    //remove the item with the indicated id
    let filteredData=allBillsData.filter(item=>item.id!==id);
    //save the edited bills entries
    fs.writeFileSync(billsFilePath,JSON.stringify(filteredData))
    res.send({message:"bill entry deleted successfully"});
})



// Endpoint to handle bill form submission
app.post('/bills/new/save', (req, res) => {
    const billsEntry:BillsData = req.body
    console.log({body:req.body})

    let historyData=ReadFile<BillsData[]>(billsFilePath,[])
    //append the new data receive int he http body
    historyData.push(billsEntry)

    fs.writeFileSync(billsFilePath,JSON.stringify(historyData))
    res.send({message:"bills saved successfully"});
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

