import React from 'react';
import './App.css';
import SearchComponent from './searchComponent/searchComponent.js';
import songsJson from './json/songs.json';

function App() {
  return (
    <div className="App">
      <div className="App-component">
        <div className="App-component">
          <SearchComponent songs={songsJson} />
        </div>
      </div>
    </div>
  );
}

export default App;
