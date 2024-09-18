export type AppointmentsData={
    id:string
    name:string,
    date:string,
    frequency:"Yearly"|"Monthly"|"Weekly"|"None"
    time:string,
    location:string,
    extra_info:string,
}

export type BillsData={
    id:string
    name:string,
    date:string,
    frequency:"Monthly"|"Yearly"|"Weekly"|"None",
    amount:string,
}