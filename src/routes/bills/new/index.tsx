import { createFileRoute } from "@tanstack/react-router";
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Link } from "@tanstack/react-router";
import type { FormEvent } from "react";
import "../bills.css";


const HandleSubmit = async(e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  let data = Object.fromEntries(formData);
  let id=(Math.random()*10000).toFixed(0);
  data.id=id
  console.log(data);

  let response = await fetch("http://127.0.0.1:3000/bills/new",{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
  })

  if(response.ok) window.location.href=`http://${window.location.host}/bills`

}

export default function NewBill() {
  return (
    <>
      <Header activeTab='bills' /> 
      <h2>New Bill</h2>
      <section className="form-container">
        <form id="bills" onSubmit={HandleSubmit}>
          <Input
            name="name"
            title="Name of bill"
            htmlFor="name"
            type="text"
            id="name"
            placeholder="Spotify"
            required
          />
          <Input
            name="amount"
            title="Amount due"
            htmlFor="amount"
            type="number"
            id="amount"
            placeholder="1400"
            required
          />          
          <Input
            name="date"
            title="Due Date"
            htmlFor="date"
            type="date"
            id="date"
            required
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
            <Link to="/bills">
              <button type="button">Cancel</button>            
            </Link>
            <button type="reset">Clear</button>
          </div>
        </form>
      </section>
    </>
  );
};

export const Route = createFileRoute("/bills/new/")({
  component: NewBill,
});
