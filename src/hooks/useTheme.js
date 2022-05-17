import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export const useTheme = () => {
    const context = useContext(ThemeContext)

    //if outside the scope..
    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider")
    }


    return context
}