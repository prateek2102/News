import React from 'react';
import NewsList from './components/NewsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">News of the Month</h1>
      <NewsList />
    </div>
  );
}

export default App;
