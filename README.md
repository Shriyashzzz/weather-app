# Weather API App

A dynamic weather application built for **The Odin Project**. Search any city and get the current weather, a 3-day forecast, and a matching animated GIF to set the mood.

**Note:** GIFs are only displayed on screens wider than 750px for optimal performance.

## Features

- Real-time city weather search
- 3-day weather forecast
- Dynamic GIF backgrounds based on weather conditions
- Responsive design

## Built With

- [Visual Crossing Weather API](https://www.visualcrossing.com/) — Real-time weather data
- [Giphy API](https://giphy.com/) — Animated GIFs
- Webpack — Module bundling
- Vanilla JavaScript (ES6+)

## What I Learned

This project helped me apply and strengthen the following skills:

- **Async/await & promise chains**
- **Fetching & working with REST APIs**
- **Loading components while fetching data from APIs**
- Dynamic DOM manipulation
- ES modules & dynamic imports
- CSS Flexbox layout
- Webpack configuration & asset bundling
- Error handling for API requests

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm (comes with Node.js)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd weather-app
```

2. Install dependencies
```bash
npm install
```

### Usage

**Development mode** (with webpack dev server):
```bash
npm start
```

- do setup your own api key in-order to run it, feel free to run mine as long as it works, it's an free api key with limited tokens, and I have yet learn to securely deal with them haha. 

- you will find the api keys on api.js inside src folder. Cheers

**Production build**:
```bash
npm run build
```

## License

This project was build as a  part of [The Odin Project](https://www.theodinproject.com/) curriculum.