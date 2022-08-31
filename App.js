import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from 'react';

function App() {
  const [pokeData, setPokeData] = useState([]);
    useEffect(() => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => {
        console.log(res.data.results);
        setPokeData(res.data.results);
      })
      .catch((err) => console.log(err));
    },[]);
  return (
    <div className="App">
      <h1>My pokemon Homework</h1>
      <ul>
        {pokeData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
     
    </div>
  );
}

export default App;
