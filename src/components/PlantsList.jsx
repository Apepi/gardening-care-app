
// Plants List Component
export default function PlantsList(props) {
    //Maps over plants added then makes a list element
    const plantsListItems = props.plants.map(plant => (
        <li key={plant}>{plant}</li>
    ))
    return (
        <section>
            <h2 className="plants-list-h2">Plants in your garden:</h2>
            <ul className="plants-list" aria-live="polite">{plantsListItems}</ul>
            {props.plants.length > 3 && <div className="get-schedule-container">
                <div>
                    <h3>Happy Plants await!</h3>
                    <p>Click the button to generate a water/feeding <br></br> schedule from your list of plants list of plants.</p>
                </div>
                <button onClick={props.getSchedule}>Get the magic Schedule</button>
            </div>}
        </section>
    )
}