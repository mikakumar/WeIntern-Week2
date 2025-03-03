import React, {createContext, useState, useEffect} from "react";

const ThemeContext = React.createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState('dark');


    useEffect(()=>{
        if('theme' in localStorage){

        const themeData = localStorage.getItem('theme', theme);
        setTheme(themeData);
        }
        else{
            localStorage.setItem('theme', 'dark');
            setTheme('dark')
        }
    }, []);


    
        const toggleTheme = () =>{
            if(theme=="light"){
                setTheme("dark");
                localStorage.setItem('theme', 'dark')
            }
            else{
                setTheme("light");
                localStorage.setItem('theme', 'light')
            }
        }
    


    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export {ThemeProvider, ThemeContext}