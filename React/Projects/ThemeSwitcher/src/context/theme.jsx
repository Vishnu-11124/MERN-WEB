import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =({children}) => {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
