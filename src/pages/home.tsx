import "./stylesheets/main.css"


export default function Home(){
    return (
    <>
    <div className="w-full h-full relative">
        <h1 className="flex items-center justify-center gap-[4px]" >
            <div className="">Notify</div>
            <img src="bell icon.svg" alt = "bell icon"/>
        </h1>
        <p><em>...never forget appointments or due bills</em></p>
        <div className="frame">
            <a href="./appointments/"><button type="button">Appointments</button></a>
            <a href="./bills"> <button type="button"> Bills </button> </a>
        </div>

    </div>
    </>
    )
}