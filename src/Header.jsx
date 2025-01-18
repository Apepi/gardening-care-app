import GardenGuru from "./assets/GardenGuru.png"

export default function Header() {
    return (
        <header>
            <img src={GardenGuru}/>
            <h1>Plant Guru</h1>
        </header>
    )
}