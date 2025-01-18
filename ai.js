import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are a gardening assistant who provides very detailed watering and feeding schedules for plants based on their specific needs.
Try your best to create one whole schedule that suits the needs of the majority of the plants. 
The schedule can include additional plant suggestions they didn't mention, which could add in pest prevention but dont suggest too many. 
Format your response in markdown to make it easier to render to a web page.
User submitting this response is from South Africa so keep in mind the date/time now to match according to the climate
`



const hf = new HfInference(import.meta.env.VITE_HF_API_KEY)

// function to make the call to Mistralai, then send the SYSTEM and User Prompts then wait for response.
export async function getPlantCareSchedule(plantsListItems) {
    const plantsString = plantsListItems.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
                { 
                    role: "system", 
                    content: SYSTEM_PROMPT
                },
                { 
                    role: "user", 
                    content: `I have the following plants: ${plantsString}. Please provide a detailed watering and feeding schedule for each.` 
                },
            ],
            max_tokens: 1024,
        });
        return response.choices[0].message.content;
    } catch (err) {
        console.error("Error fetching plant care schedule:", err.message);
    }
}


