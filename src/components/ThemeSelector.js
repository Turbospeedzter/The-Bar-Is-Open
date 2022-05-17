import { useTheme } from "../hooks/useTheme"
import './ThemeSelector.css'
import React from 'react'
import modeIcon from '../assets/mode-icon.svg'


const themeColors = ['#6699cc', '#156448', '#b70233']


export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)


  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img 
            onClick={toggleMode} 
            src={modeIcon} 
            alt='icon'
            style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
             />
        </div>
        <div className="theme-buttons">
            {themeColors.map(color => (
                <div
                    key={color}
                    onClick={() => changeColor(color)}
                    style={{ background: color }}
                />
            ))}
        </div>

    </div>
  )
}
