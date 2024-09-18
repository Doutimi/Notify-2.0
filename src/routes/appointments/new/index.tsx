import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import "../appointments.css";
import type { FormEvent } from "react";



const HandleSubmit = async(e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  let data = Object.fromEntries(formData);
  let id=(Math.random()*10000).toFixed(0);
  data.id=id
  console.log(data);

  let response = await fetch("http://127.0.0.1:3000/appointments/new",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  })

  if(response.ok) window.location.href=`http://${window.location.host}/appointments`

}
export default function New() {
  return (
    <>
      <Header link="../../bills" />
      <h2>New Appointment</h2>
      <section className="form-container">
        <form id="appointments" onSubmit={HandleSubmit}>
          <Input
            name="name"
            title="Name of appointment"
            htmlFor="name"
            type="text"
            id="name"
            placeholder="Dre's immunization"
            required
          />
          <Input
            name="date"
            title="Date"
            htmlFor="date"
            type="date"
            id="date"
            required
          />
          <Input
            name="time"
            title="Time"
            htmlFor="time"
            type="time"
            id="time"
            required
          />
          <Input
            name="location"
            title="Location"
            htmlFor="location"
            type="text"
            id="location"
            required
          />
          <Input
            title="Additional Information"
            htmlFor="extra_info"
            type="text"
            id="extra_info"
            name="extra_info"
            placeholder="Notes about your appointment here..."
          />

          <label>Recurrence:</label>
          <span>
            {/* <Input/> */}
            <input type="radio" id="yearly" name="frequency" value="Yearly" />
            <label htmlFor="option1"> Yearly</label>

            <input type="radio" id="monthly" name="frequency" value="Monthly" />
            <label htmlFor="option2"> Monthly</label>

            <input type="radio" id="weekly" name="frequency" value="Weekly" />
            <label htmlFor="option3"> Weekly</label>

            <input type="radio" id="none" name="frequency" value="None" />
            <label htmlFor="option4"> None</label>
            <br />
          </span>

          <div className="btn_frame container">
            <button type="submit">Save</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      </section>
    </>
  );
}

export const Route = createFileRoute("/appointments/new/")({
  component: New,
});
