import { createContext, useReducer } from 'react'


export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload}
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        default:
            return state
    }
}

//Custom logic manipulate the attributes of the context dynamically
//this allows any children of the function in the future to be able to be rendered.

export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c',
        mode: 'dark'
    })
        //or any other name we want
        //the second argument in the object is the initial state
        //capture the state the normal state way in an array with const.

        const changeColor = (color) => {
            dispatch({ type: 'CHANGE_COLOR', payload: color })
        }

        const changeMode = (mode) => {
            dispatch({ type: 'CHANGE_MODE', payload: mode })
        }

    return (
       <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
           {children}
       </ThemeContext.Provider> 
    )
}