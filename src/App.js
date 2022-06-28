import { createContext, useState } from 'react';
import './App.css';
import User from './utils/User';
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)

function App() {
  const [ theme, setTheme] = useState('light')

  const changeTheme = ()=>{
    setTheme((curr)=> (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme}}>
      <div className="App" id={theme}>
        <User />
        <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
      <ReactSwitch onChange={changeTheme} checked={theme === 'dark'}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
