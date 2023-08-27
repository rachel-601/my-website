"use client"
import React, {useState} from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <button className={active ? "text-indigo-300": "text-black"} 
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
        <button className={active ? "text-indigo-300": "text-black"} 
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
        <button className={active ? "text-indigo-300": "text-black"} 
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
        <button className={active ? "text-indigo-300": "text-black"} 
        onClick={handleClick} 
        onMouseEnter={mouseEnterLeave}
        onMouseLeave={mouseEnterLeave}>
            CONTACT
        </button>
    )
}

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

