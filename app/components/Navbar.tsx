"use client"
import React, {useState} from "react"

let Links = [
    {name:"HOME", link: "/"},
    {name:"ABOUT", link: "/"},
    {name:"PORTFOLIO", link: "/"},
    {name:"CONTACT", link: "/"},
]



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
} */

const Navbar = () => {
    const [open,setOpen] = useState(false);
    return (
         <div className="shadow-md fixed top-0 w-full"> 
            <div className="items-center bg-white py-7 md:py-4 md:px-10 px-7 justify-between">
                <div className="absolute right-8 top-4 cursor-pointer md:hidden sm:right-10">
                    <div className="text-l text-indigo-300" onClick={()=>setOpen(!open)}>
                        MENU
                    </div>
                </div>
                <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 ${!open ? 'hidden':'right-0'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className="text-l m-auto md:my-0 my-7">
                                <a href={link.link} className="text-black hover:text-indigo-300 duration-300">
                                    {link.name}</a>
                            </li>
                        ))
                    }
                    {/* {HomeButton()} {AboutButton()} {PortButton()} {ContactButton()}*/}
                </ul>
            </div>
        </div>
    )
}

export default Navbar

