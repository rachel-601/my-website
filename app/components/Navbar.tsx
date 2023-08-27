"use client"
import React, {useState} from "react"
<<<<<<< HEAD
import { BrowserRouter, Route, Link } from "react-router-dom";
=======
>>>>>>> de4487b0b6a80e87385cb8131dd1d4bff63d061c

function HomeButton() {
    const [active, set] = useState(false); 

    function handleClick() {
        set(false)
        "change to Home page"
    }

    function mouseEnterLeave() {
        set(!active)
<<<<<<< HEAD
    }

    return (
        <button className={active ? "text-indigo-300": "text-black"} 
        onClick={handleClick} 
        onMouseEnter={mouseEnterLeave}
        onMouseLeave={mouseEnterLeave}>
            HOME
=======
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
>>>>>>> de4487b0b6a80e87385cb8131dd1d4bff63d061c
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

