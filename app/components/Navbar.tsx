"use client"
import React, {useState} from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";

/* function HomeButton() {
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

const Navbar = () => {
    return (
         <div className=""> 
            <div className="h-14 flex items-center justify-center space-x-28">
                {HomeButton()} {AboutButton()} {PortButton()} {ContactButton()}
            </div>
        </div>
    )
}

export default Navbar */

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Portfolio</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}