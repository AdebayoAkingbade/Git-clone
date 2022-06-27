import React, {useState} from 'react';
// import * as ReactDOM from 'react-dom';
import { createContext } from 'react'
import User from '../../utils/User';

export const ThemeContext = createContext(null)



const DarkMode = ()=>{
    const [theme, setTheme] = useState('light')

    const toggle = ()=>{
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }

    return(
        <ThemeContext.provider value={{theme, toggle}}>
            <div className='change_theme' id={theme}>
                <User />
            </div>
        </ThemeContext.provider>
    )
}

export default DarkMode




// const DarkMode = () => {
//   const [isDarkMode, setDarkMode] = React.useState(false);

//   const toggleDarkMode = (checked) => {
//     setDarkMode(checked);
//   };

//   return (
//     <DarkModeSwitch
//       style={{ marginBottom: '2rem' }}
//       checked={isDarkMode}
//       onChange={toggleDarkMode}
//       size={120}
//     />
//   );
// };

// export default DarkMode

// // 1
// const setDark = () => {

//     // 2
//     localStorage.setItem("theme", "dark");
  
//     // 3
//     document.documentElement.setAttribute("data-theme", "dark");
//   };
  
//   const setLight = () => {
//     localStorage.setItem("theme", "light");
//     document.documentElement.setAttribute("data-theme", "light");
//   };
  
//   // 4
//   const storedTheme = localStorage.getItem("theme");
  
//   const prefersDark =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches;
  
//   const defaultDark =
//     storedTheme === "dark" || (storedTheme === null && prefersDark);
  
//   if (defaultDark) {
//     setDark();
//   }
  
//   // 5
//   const toggleTheme = (e) => {
//     if (e.target.checked) {
//       setDark();
//     } else {
//       setLight();
//     }
//   };
  
//   const DarkMode = () => {
//     return (
//       <div className="toggle-theme-wrapper">
//         <span>☀️</span>
//         <label className="toggle-theme" htmlFor="checkbox">
//           <input
//             type="checkbox"
//             id="checkbox"
  
//             // 6
//             onChange={toggleTheme}
//             defaultChecked={defaultDark}
//           />
//           <div className="slider round"></div>
//         </label>
//         <span>🌒</span>
//       </div>
//     );
//   };
  
//   export default DarkMode