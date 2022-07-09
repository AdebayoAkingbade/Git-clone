import { createContext, useState } from 'react';
import './App.css';
import User from './utils/User';
import ReactSwitch from 'react-switch'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export const ThemeContext = createContext(null)

function App() {
  const [ theme, setTheme ] = useState('light')

  const changeTheme = ()=>{
    setTheme((curr)=> (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme}}>
      <div className="App" id={theme}>
      <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={User} />
        <Redirect to={'/adebayoakingbade'} />
        {/* <User /> */}
      </Switch>
      </BrowserRouter>
      <ReactSwitch onChange={changeTheme} checked={theme === 'dark'} style={{position:'relative', bottom:'1505px', left:'730px'}}/>
        {/* <label>{theme === 'light' ? 'Light' : 'Dark'}</label> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
