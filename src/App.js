import axios from 'axios'
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: rebeccapurple;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(({data}) => {
      console.log(data)
      setCharacters(data);
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

      return (
        <div className="App">
          <Title className="Header">⚫🤖⚔️ Star Wars Characters! ⭐🔫🧑⚔️</Title>
          <Character props = {characters}/>
        </div>
      );
    }
    
    export default App;
