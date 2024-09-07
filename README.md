# belly-button-challenge
This project creates an interactive web dashboard that visualizes bacteria culture data from a given dataset. The dashboard allows users to explore metadata, a horizontal bar chart of the top 10 bacteria cultures, and a bubble chart of all bacteria cultures for a selected sample. The project leverages `D3.js` for data handling and `Plotly.js` for creating the visualizations.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Project Overview

The dashboard visualizes bacteria culture samples and provides metadata based on a dataset of different samples. Users can select a sample ID from a dropdown menu to see the related data, including:

- Metadata information such as the subject's ethnicity, gender, age, etc.
- A bar chart displaying the top 10 bacteria cultures found in the sample.
- A bubble chart showcasing all bacteria cultures with the quantity and ID.

## Features

- **Dropdown Menu:** Select a sample from the dropdown to dynamically update the dashboard.
- **Metadata Panel:** Displays sample-specific metadata such as age, gender, location, and more.
- **Bar Chart:** Shows the top 10 bacterial OTUs found in the selected sample, ordered by quantity.
- **Bubble Chart:** Visualizes all bacterial OTUs found in the sample, with bubble size corresponding to the quantity.

## Technologies Used

- **D3.js:** Used for data handling and interaction with the HTML DOM.
- **Plotly.js:** Used for creating interactive bar and bubble charts.
- **JavaScript (ES6+):** Core logic for handling data and building the visualizations.
- **HTML/CSS:** For structuring and styling the webpage.
- **JSON:** Data is fetched from a hosted JSON file.

## Usage

To view the html deployed page visit (https://eeanguyen.github.io/belly-button-challenge/
)