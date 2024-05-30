# Project Title
Movie_Website

## Description
The Movie_Website Application is designed to provide users with an intuitive interface to browse and manage their favorite movies. The application fetches movie data from an external API and offers functionalities to sort, favorite/unfavorite movies, and view detailed information.

## Features

- Data Fetching
    - Fetch movies data from the API.
    - Handle API errors gracefully.
- Sorting
    - Display the movies in a list.
    - Sort by rating from highest to lowest.
- State Management
    - Utilizing Redux.
    - Separates concerns and manages state effectively.
- Responsive Design
    - Ensures the UI works on desktop, tablet, and mobile devices.
    - Uses Tailwind CSS for styling.
- Favorite Movies
    - This page displays the list of movies that have been marked as favorites.
    - The order of movies is preserved as per the sequence they were added to the favorites list.

##  User Interface
### Responsiveness

- The UI is responsive across devices (desktop/laptop, tablet, phone).

### Design

-  A responsive design is implemented that adapts to different screen sizes.

## Technical Specifications

- **React**: For building the user interface.
- **Redux**: For state management.
- **CSS (Tailwind/Custom)**: To ensure responsiveness.

## Setup and Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/thisisrekha/movieswebsite.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd /path_to_repo/
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

- **Development Mode**:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.


### Download the packages required externally if required

- **Installing Other Dependencies**:
    ```bash
    npm intsall react-redux 
    npm install @reduxjs/toolkit 
    npm install react-dom
    ```

### Link to the Repository

[Source Code](https://github.com/thisisrekha/movieswebsite/)

#### Deployed Website

The application is deployed and can be accessed [here](https://thisisrekha.github.io/movieswebsite/)


## API Usage Instructions

### Getting Started

To interact with the Movies API, follow these steps using Postman:

1. **Set Up Postman**:
   - Download and install Postman from [here](https://www.postman.com/downloads/).

2. **API Endpoint**:
   - Base URL: `https://dummyapi.online`

### GET Request

- **Endpoint**: `/api/movies`
- **Method**: GET
- **Description**: Retrieve the list of all movies.
- **Steps**:
  1. Open Postman.
  2. Create a new GET request.
  3. Enter the URL: `https://dummyapi.online/api/movies`
  4. Click "Send".
  5. View the response in the body section.


