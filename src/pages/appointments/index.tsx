import styles from "./styles.module.css"

export function Header({link}:{link:string}){
    return(
        <header>    
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href={link}>Bills</a></li>
                    <li className={styles["active"]}>Appointments</li>
                </ul>
            </nav>
        </header>
    )
}

function ListItem({name,date}:{name:string,date:string}){
    return (
        <div className={styles["list-item"]}>
            <span className={styles["item-name"]}>{name}</span>
            <span className={styles["item-date"]}>{date}</span>
        </div>
    )
}


export default function Appointments(){
    return (
        <>
        <Header link="../bills/"/>
        <h2>Appointments</h2>
        <section className={styles.container} id={styles.container}>
            <ListItem name="Name of Appointment" date="Date Due"/>
            <ListItem name="Name of Appointment" date="Date Due"/>
            <ListItem name="Name of Appointment" date="Date Due"/>
        </section>
        <div className={`${styles.frame} ${styles.container}`}>
            <a href="new/">
                <button type="button">New Appointment</button>
            </a>
        </div>
        </>
    )

}