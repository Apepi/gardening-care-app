# Plant Guru 🌿
![GardenGurupic](https://github.com/user-attachments/assets/bff5ea8e-1a36-4094-8e64-4916ef74fa35)

Plant Guru is a React application that helps you create personalized care schedules for your garden plants. Simply add your plants, and let Plant Guru generate a custom care schedule tailored to your garden's needs.

## Features

- Add multiple plants to your garden list
- Generate customized care schedules
- User-friendly interface
- Real-time updates to your plant list
- Automatic schedule generation when you have more than 3 plants

## Technologies Used

- React
- Vite
- JavaScript
- CSS

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/plant-guru.git
cd plant-guru
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the project root and add your API key
```env
VITE_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm run dev
```

## Getting an API Key

1. Choose what ever flavor of Ai API you would like to connect with. (I used HF MISTRALAI)
2. Create an account or sign in
3. Navigate to the API section
4. Generate a new API key
5. Copy the key and paste it in your `.env` file as shown in the installation steps

## Project Structure

```
plant-guru/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PlantsList.jsx
│   │   └── ScheduleCard.jsx
│   ├── assets/
│   │   └── GardenGuru.png
│   ├── App.jsx
│   ├── main.jsx
│   └── ai.js
├── .env
└── index.html
```

## Usage

1. Open the application in your browser
2. Enter plant names in the input field and click "Add plant"
3. Once you've added more than 3 plants, you'll see the option to generate a care schedule
4. Click "Get the magic Schedule" to generate your personalized plant care schedule

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
