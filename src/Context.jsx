import React, {createContext, useState, useEffect} from "react";

const ThemeContext = React.createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState('');


    useEffect(()=>{
        const themeData = localStorage.getItem('theme', theme);

        console.log(themeData);

        if(themeData){
            setTheme(themeData);
        }
    }, []);

    useEffect(()=>{
        if(theme=='')
            localStorage.setItem('theme', 'dark')
        localStorage.setItem('theme', theme);
    }, [theme]);


    
        const toggleTheme = () =>{
            if(theme=="light")
                setTheme("dark");
            else
                setTheme("light");
        }
    


    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export {ThemeProvider, ThemeContext}