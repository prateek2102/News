
# News Aggregator

A simple news aggregator application built with React and Node.js. This project fetches news from three different APIs and displays the aggregated news articles on the frontend using Bootstrap for styling.

## Features

- Fetches news from three different APIs.
- Displays news articles with title, description, and source.
- Responsive design using Bootstrap.
- Simple and intuitive user interface.

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **APIs**: News API, [API 2], [API 3] (replace with actual API names)

## Setup

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- Basic knowledge of React and Node.js.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/news-aggregator.git
    cd news-aggregator
    ```

2. **Install backend dependencies:**

    Navigate to the `backend` directory and install the required packages.

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    Navigate to the `frontend` directory and install the required packages.

    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add your API keys:

    ```env
    NEWS_API_KEY=your_news_api_key
    API_2_KEY=your_api_2_key
    API_3_KEY=your_api_3_key
    ```

5. **Start the backend server:**

    Navigate to the `backend` directory and start the server:

    ```bash
    cd ../backend
    npm start
    ```

    The backend server will be running on `http://localhost:5000`.

6. **Start the frontend server:**

    Navigate to the `frontend` directory and start the React app:

    ```bash
    cd ../frontend
    npm start
    ```

    The frontend application will be available at `http://localhost:3000`.

## Usage

1. **Backend:**

    - The backend server fetches news from three different APIs and provides endpoints for the frontend to access the news data.

2. **Frontend:**

    - The React app fetches news data from the backend and displays it using Bootstrap components.
    - The app is designed to be responsive and easy to navigate.

## API Endpoints

- **GET /api/news**: Fetches aggregated news from the three APIs.
  
## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---
