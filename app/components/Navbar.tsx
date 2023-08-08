"use client"
import React, {useState} from "react"
import {useTheme} from "next-themes"
import './Navbar.css';


function NavButton(props: String) {
    function handleClick() {
        "take to " + props
    }

    return (
        <button onClick={handleClick}>
            {props}
        </button>
    )
}

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "HOME",
        page: "home",
    },
    {
        label: "ABOUT",
        page: "about",
    },
    {
        label: "PORTFOLIO",
        page: "portfolio",
    },
    {
        label: "CONTACT",
        page: "contact",
    }
]

const Navbar = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)
    return (
         <div className="Navbar"> 
            {NavButton("HOME")} {NavButton("ABOUT")} {NavButton("PORTFOLIO")} {NavButton("CONTACT")}
        </div>
    )
}

export default Navbar