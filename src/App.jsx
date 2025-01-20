import React from 'react'
import Header from './Header.jsx'
import { getPlantCareSchedule } from '../ai.js'
import PlantsList from './components/PlantsList.jsx'
import ScheduleCard from './components/ScheduleCard.jsx'


function App() {

  //Plants State
  const [plants, setPlants] = React.useState([])
  //Schedule State
  const [schedule, setSchedule] = React.useState("")
  // Pulling in the Ai response
  async function getSchedule() {
    const scheduleMarkdown = await getPlantCareSchedule(plants)
    setSchedule(scheduleMarkdown)
  }
  // Add plant to plantList Array
  function addPlant(formData) {
    const newPlant = formData.get("plant")
    setPlants(prevPlants => [...prevPlants, newPlant])
  }


  return (
    <>
      <Header />
      <main>        
      <form onSubmit={(e) => {
        e.preventDefault(); // Preventing the default form submission behavior
        addPlant(new FormData(e.target));
        e.target.reset(); // Resets the field after submit
      }} className="add-plant-form">
          <input
              type="text"
              placeholder="e.g. Dahlia"
              aria-label="Add plant"
              name="plant"
          />
          <button type="submit">Add plant</button> 
      </form>
        
        {plants.length > 0 &&   
            <PlantsList
                plants={plants}
                getSchedule={getSchedule}
            />
        } 
              
        {schedule && <ScheduleCard schedule={schedule} /> }
        
      </main>
    </>
  )
}

export default App
