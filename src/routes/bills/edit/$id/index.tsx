import { createFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Icons } from '@/components/Icons'
import { useEffect, useState, type FormEvent } from 'react'
import type { BillsData } from '@/types'

const serverURL="http://localhost:3000"

const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  let value = Object.fromEntries(formData)
  console.log({ value })

  let response = await fetch(serverURL + window.location.pathname, {
    method: 'PATCH',
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'bills/json',
    },
  })

  await response.json()
  if (response.ok)
    window.location.href = `http://${window.location.host}/bills`;
  return false
}

async function HandleDelete(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault()
  // console.log("got here");
  let response = await fetch(serverURL +window.location.pathname, {
    method: 'DELETE',
  })

  await response.text()
  window.location.href = '/bills'
  return false
}

export default function New() {
    let[itemData,setData]=useState<BillsData>();
    let [frequency,setFrequency]=useState<BillsData['frequency']>()
    useEffect(()=>{
      async function FetchData(){
        let response =await fetch("http://localhost:3000" +window.location.pathname+"/data") 
        let data:BillsData=await response.json();
        console.log (data)
        setData(data);
        setFrequency(data.frequency)
      }
      FetchData()
    },[]) 

  return (
    <>
      <Header activeTab='bills' /> 
      <h2>Edit Bill</h2>
      <section className="form-container">
        <form id="bills" onSubmit={HandleSubmit}>
        <Input
            name="name"
            title="Name of bill"
            htmlFor="name"
            type="text"
            id="name"
            placeholder="Spotify"
            defaultValue={itemData?.name}
            required
          />
          <Input
            name="amount"
            title="Amount due"
            htmlFor="amount"
            type="number"
            id="amount"
            placeholder="1400"
            defaultValue={itemData?.amount}
            required
          />
  
          
          <Input
            name="date"
            title="Due Date"
            htmlFor="date"
            type="date"
            id="date"
            required
            defaultValue={itemData?.date}
          />

          <label>Recurrence:</label>
          <span>
            {/* <Input/> */}
            <input checked={frequency==="Yearly"} onClick={()=>setFrequency("Yearly")}  onChange={()=>undefined}
              type="radio" id="yearly" name="frequency" value="Yearly" 
            />
            <label htmlFor="option1"> Yearly</label>

            <input checked={frequency==="Monthly"} onClick={()=>setFrequency("Monthly")} onChange={()=>undefined}
              type="radio" id="monthly" name="frequency" value="Monthly" 
            />
            <label htmlFor="option2"> Monthly</label>

            <input  checked={frequency==="Weekly"} onClick={()=>setFrequency("Weekly")} onChange={()=>undefined}
              type="radio" id="weekly" name="frequency" value="Weekly" 
            />
            <label htmlFor="option3"> Weekly</label>

            <input  checked={frequency==="None"} onClick={()=>setFrequency("None")} onChange={()=>undefined}
              type="radio" id="none" name="frequency" value="None" 
            />
            <label htmlFor="option4"> None</label>
            <br />
          </span>

          <div className="btn_frame container">
            <button type="submit">Save</button>
            <Link to="/bills">
              <button type="button">Cancel</button>            
            </Link>
            <button onClick={HandleDelete}>
              <Icons.trash className="w-5 h-5" />
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export const Route = createFileRoute('/bills/edit/$id/')({
  component: New,
})
