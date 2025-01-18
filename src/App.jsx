import React from 'react'
import Header from './Header.jsx'
import { getPlantCareSchedule } from '../ai.js'
import PlantsList from './components/PlantsList.jsx'
import ScheduleCard from './components/ScheduleCard.jsx'


function App() {
  const [plants, setPlants] = React.useState([])

  const [schedule, setSchedule] = React.useState("")

  async function getSchedule() {
    const scheduleMarkdown = await getPlantCareSchedule(plants)
    setSchedule(scheduleMarkdown)
  }

  function addPlant(formData) {
    const newPlant = formData.get("plant")
    setPlants(prevPlants => [...prevPlants, newPlant])
  }


  return (
    <>
      <Header />
      <main>        
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        addPlant(new FormData(e.target));
        e.target.reset();
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

        {schedule && <ScheduleCard schedule={schedule} />}
        
      </main>
    </>
  )
}

export default App
