import { createFileRoute } from "@tanstack/react-router";
import styles from "./appointments.module.css";
import { Header } from "@/components/Header";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Fetch } from "@/lib/api";
import type { AppointmentsData } from "@/types";
import { appServerURl } from "@/address";

async function FetchEntries(){
  let data=await Fetch<AppointmentsData[]>(`${appServerURl}/appointments/list`);
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

  let entries=entriesData.map(({ name, date,id },index) => (
    <div className={styles["list-item"]} key={index}>
      <a href={`/appointments/edit/${id}`}>
        <span className={styles["item-name"]}>{name}</span>
      </a>
      <span className={styles["item-date"]}>
        {dayjs(date).format("MM/DD/YYYY")}
      </span>
    </div>
  ))

  return (
    <>
      <Header activeTab="appointments" />
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
