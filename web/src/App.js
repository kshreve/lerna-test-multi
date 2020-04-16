import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import { getJoke } from './redux/ducks/joke'

const App = () => {
  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJoke())
  }, [dispatch])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {joke ? `random joke: ${joke.value}` : ''}
      </header>
    </div>
  );
}

export default App;
