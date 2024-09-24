import { createFileRoute, useParams } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Icons } from '@/components/Icons'
import '../../appointments.css'
import { useEffect, useState, type FormEvent } from 'react'
import type { AppointmentsData } from '@/types'

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
      'Content-Type': 'application/json',
    },
  })

  await response.json()
  if (response.ok)
    window.location.href = `http://${window.location.host}/appointments`;
  return false
}

async function HandleDelete(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  e.preventDefault()
  // console.log("got here");
  let response = await fetch(serverURL +window.location.pathname, {
    method: 'DELETE',
  })

  await response.text()
  window.location.href = '/appointments'
  return false
}
export default function New() {
  let[itemData,setData]=useState<AppointmentsData>();
  let [frequency,setFrequency]=useState<AppointmentsData['frequency']>()
  useEffect(()=>{
    async function FetchData(){
      let response =await fetch("http://localhost:3000" +window.location.pathname+"/data") 
      let data:AppointmentsData=await response.json();
      setData(data);
      setFrequency(data.frequency)
    }
    FetchData()
  },[])
  // let route=useParams({})
  return (
    <>
      <Header activeTab='appointments' />
      <h2>Edit Appointment</h2>
      <section className="form-container">
        <form id="appointments" onSubmit={HandleSubmit}>
          <Input
            name="name"
            title="Name of appointment"
            htmlFor="name"
            type="text"
            id="name"
            defaultValue={itemData?.name}
            required
          />
          <Input
            name="date"
            title="Date"
            htmlFor="date"
            type="date"
            id="date"
            required
            defaultValue={itemData?.date}
          />
          <Input
            name="time"
            title="Time"
            htmlFor="time"
            type="time"
            id="time"
            required
            defaultValue={itemData?.time}
          />
          <Input
            name="location"
            title="Location"
            htmlFor="location"
            type="text"
            id="location"
            required
            defaultValue={itemData?.location}
          />
          <Input
            title="Additional Information"
            htmlFor="extra_info"
            type="text"
            id="extra_info"
            name="extra_info"
            placeholder="Notes about your appointment here..."
            defaultValue={itemData?.extra_info}
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
            <Link to="/appointments">
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

export const Route = createFileRoute('/appointments/edit/$id/')({
  component: New,
})
