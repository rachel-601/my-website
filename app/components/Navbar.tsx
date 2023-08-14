"use client"
import React, {useState} from "react"

function HomeButton() {
    const [active, set] = useState(false); 

    function handleClick() {
        set(false)
        "change to Home page"
    }

    function mouseEnterLeave() {
        set(!active)
    }

    return (
        <button className={active ? "text-purple-500": "text-black"} 
        onClick={handleClick} 
        onMouseEnter={mouseEnterLeave}
        onMouseLeave={mouseEnterLeave}>
            HOME
        </button>
    )
}

function AboutButton() {
    const [active, set] = useState(false); 

    function handleClick() {
        set(false)
        "change to Home page"
    }

    function mouseEnterLeave() {
        set(!active)
    }

    return (
        <button className={active ? "text-purple-500": "text-black"} 
        onClick={handleClick} 
        onMouseEnter={mouseEnterLeave}
        onMouseLeave={mouseEnterLeave}>
            ABOUT
        </button>
    )
}

function PortButton() {
    const [active, set] = useState(false); 

    function handleClick() {
        set(false)
        "change to Home page"
    }

    function mouseEnterLeave() {
        set(!active)
    }

    return (
        <button className={active ? "text-purple-500": "text-black"} 
        onClick={handleClick} 
        onMouseEnter={mouseEnterLeave}
        onMouseLeave={mouseEnterLeave}>
            PORTFOLIO
        </button>
    )
}

function ContactButton() {
    const [active, set] = useState(false); 

    function handleClick() {
        set(false)
        "change to Home page"
    }

    function mouseEnterLeave() {
        set(!active)
    }

    return (
        <button className={active ? "text-purple-500": "text-black"} 
        onClick={handleClick} 
        onMouseEnter={mouseEnterLeave}
        onMouseLeave={mouseEnterLeave}>
            CONTACT
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
    return (
         <div className=""> 
            <div className="h-14 flex items-center justify-center space-x-28">
                {HomeButton()} {AboutButton()} {PortButton()} {ContactButton()}
            </div>
        </div>
    )
}

export default Navbar