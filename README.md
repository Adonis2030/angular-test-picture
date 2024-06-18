# Tourist Information Interface

## Overview

This project is an implementation of an information interface for tourists, providing details about planned destinations. It includes features such as language switching, search functionality, and infinite scrolling. The project aims to demonstrate coding skills, usage of lightweight frameworks, and best practices.

## Features

- **Two Languages Content**: Supports English and another language (e.g., Hungarian). Language can be switched by the user.
- **Tourist Information Feed**: Displays a list of tourist destinations with location, descriptions, pictures, ratings, etc.
- **Search Functionality**: Users can search through the list based on location names.
- **Infinite Scroll**: The feed supports infinite scrolling to load more content dynamically.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally

### Installation

Clone the repository:

```sh
git clone https://github.com/Adonis2030/angular-test-picture.git
cd angular-test-picture
```

#### Install dependencies:

```sh
npm install
```

## Running the Application

- Start the development server:

```sh
ng serve
```

- Open your browser and navigate to http://localhost:4200.

### Usage

- Language Switching: Use the buttons in the header to switch between languages.
- Search: Use the search box to filter destinations by location.
- Infinite Scroll: Scroll down to load more destinations dynamically.

### Future Improvements

- Implement responsive design for mobile and tablet views.
- Add real API integration for fetching tourist data.
- Enhance search functionality with more filters (e.g., ratings).
- Add user authentication and personalized user features.

### Development Decisions

- Chose Angular for its robust framework and familiarity.
- Used @ngx-translate/core for language translation due to its simplicity and ease of integration.
- Simulated API response to focus on UI/UX and functionality within the given timeframe.
