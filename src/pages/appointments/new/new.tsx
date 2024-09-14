import { ComponentProps } from "react"
import { Header } from ".."
import "../appointments.css"

type BaseProp={
    title:string
    htmlFor:string,
    id:string,
    required?:boolean,
    name:string,
    placeholder?:string
}
type NewInputProp={
    type:React.HTMLInputTypeAttribute,
} & BaseProp

export function Input(prop:NewInputProp){
    let {type,id,required,htmlFor,name,placeholder,title}=prop
    return(
    <>
        <label htmlFor={htmlFor}>{title}</label><br/>
        <input 
            className="form-field" 
            type={type} 
            id={id} 
            name={name} 
            required={required}
            placeholder={placeholder}
        />
        <br/>
    </>
    )
}


export default function New(){
    return (
    <>
    <Header link="../../bills"/>
    <h2>New Appointment</h2>
    <section className="form-container">
        <form id="appointments">
            <Input name="name" title="Name of appointment" htmlFor="name" type="text" id="name" placeholder="Dre's immunization" required />
            <Input name="date" title="Date" htmlFor="date" type="date" id="date" required />
            <Input name="time" title="Time" htmlFor="time" type="time" id="time" required />
            <Input name="location" title="Location" htmlFor="location" type="text" id="location" required />
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
                <input type="radio" id="yearly" name="frequency" value="Yearly"/>
                <label htmlFor="option1"> Yearly</label>
                
                <input type="radio" id="monthly" name="frequency" value="Monthly"/>
                <label htmlFor="option2"> Monthly</label>
                
                <input type="radio" id="weekly" name="frequency" value="Weekly"/>
                <label htmlFor="option3"> Weekly</label>
                
                <input type="radio" id="none" name="frequency" value="None"/>
                <label htmlFor="option4"> None</label><br/>
            </span>

            <div className="btn_frame container">
              <button type="submit">Save</button>
              <button type="reset">Clear</button>
            </div>
        </form>
    </section>   
    </>
    )
}