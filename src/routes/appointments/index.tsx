import { createFileRoute } from "@tanstack/react-router";
import styles from "./appointments.module.css";
import { Header } from "@/components/Header";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Fetch } from "@/lib/api";
import type { AppointmentsData } from "@/types";

const appointments = [
  {
    name: "Doctor Appointment",
    date: new Date(2024, 12, 1),
  },
  {
    name: "Dentist Appointment",
    date: new Date(2024, 11, 4),
  },

  {
    name: "Eye Doctor Appointment",
    date: new Date(2024, 10, 5),
  },
];
async function FetchEntries(){
  let data=await Fetch<AppointmentsData[]>(`http://127.0.0.1:3000/appointments/list`);
  return data
}
export default function Appointments() {
  let [entriesData,setEntries]=useState<AppointmentsData[]>([])
  useEffect(()=>{
    FetchEntries().then((data)=>{
      console.log(data)
      setEntries(data)
    })
  },[]);

  let entries=entriesData.map(({ name, date },index) => (
    <div className={styles["list-item"]} key={index}>
      <span className={styles["item-name"]}>{name}</span>
      <span className={styles["item-date"]}>
        {dayjs(date).format("MM/DD/YYYY")}
      </span>
    </div>
  ))

  return (
    <>
      <Header link="../bills/" />
      <h2>Appointments</h2>
      <section className={styles.container} id={styles.container}>
        {entries}
      </section>

      <div className={`${styles.frame} ${styles.container}`}>
        <a href={`${window.location.href}/new`}>
          <button type="button">New Appointment</button>
        </a>
      </div>
    </>
  );
}

export const Route = createFileRoute("/appointments/")({
  component: Appointments,
});
